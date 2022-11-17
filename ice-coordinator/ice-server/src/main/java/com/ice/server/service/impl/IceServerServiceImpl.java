package com.ice.server.service.impl;

import com.ice.common.dto.IceBaseDto;
import com.ice.common.dto.IceConfDto;
import com.ice.common.dto.IceTransferDto;
import com.ice.common.enums.NodeTypeEnum;
import com.ice.common.enums.StatusEnum;
import com.ice.common.model.IceShowNode;
import com.ice.server.constant.Constant;
import com.ice.server.dao.mapper.IceAppMapper;
import com.ice.server.dao.mapper.IceBaseMapper;
import com.ice.server.dao.mapper.IceConfMapper;
import com.ice.server.dao.mapper.IceConfUpdateMapper;
import com.ice.server.dao.model.IceBase;
import com.ice.server.dao.model.IceBaseExample;
import com.ice.server.dao.model.IceConf;
import com.ice.server.dao.model.IceConfExample;
import com.ice.server.exception.ErrorCode;
import com.ice.server.exception.ErrorCodeException;
import com.ice.server.service.IceServerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import java.util.*;

/**
 * @author zjn
 */
@Slf4j
@Service
public class IceServerServiceImpl implements IceServerService, InitializingBean {

    private static final Object CHANGE_LOCK = new Object();
    /*
     * key:app value baseList
     */
    private final Map<Integer, Map<Long, IceBase>> baseActiveMap = new HashMap<>();

    private final Map<Long, Map<Long, Integer>> atlasMap = new HashMap<>();
    /*
     * key:app value conf
     */
    private final Map<Integer, Map<Long, IceConf>> confActiveMap = new HashMap<>();

    private final Map<Integer, Map<Long, Map<Long, IceConf>>> confUpdateMap = new HashMap<>();

    private final Map<Integer, Map<Byte, Map<String, Integer>>> leafClassMap = new HashMap<>();

    private volatile long version;
    @Resource
    private IceBaseMapper baseMapper;
    @Resource
    private IceConfMapper confMapper;
    @Resource
    private IceConfUpdateMapper confUpdateMapper;
    @Resource
    private IceAppMapper iceAppMapper;

    public synchronized boolean haveCircle(Long nodeId, Long linkId) {
        if (nodeId.equals(linkId)) {
            return true;
        }
        Map<Long, Integer> linkNextMap = atlasMap.get(linkId);
        if (CollectionUtils.isEmpty(linkNextMap)) {
            return false;
        }
        Set<Long> linkNext = linkNextMap.keySet();
        if (linkNext.contains(nodeId)) {
            return true;
        }
        for (Long next : linkNext) {
            if (haveCircle(nodeId, next)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public synchronized boolean haveCircle(Long nodeId, List<Long> linkIds) {
        if (!CollectionUtils.isEmpty(linkIds)) {
            for (Long linkId : linkIds) {
                if (haveCircle(nodeId, linkId)) {
                    return true;
                }
            }
        }
        return false;
    }

    /*
     * nodeId next add linkId count
     */
    public synchronized void link(Long nodeId, Long linkId) {
        if (haveCircle(nodeId, linkId)) {
            throw new ErrorCodeException(ErrorCode.INPUT_ERROR, "have circle nodeId:" + nodeId + " linkId:" + linkId);
        }
        Map<Long, Integer> nodeNextMap = atlasMap.computeIfAbsent(nodeId, k -> new HashMap<>());
        Integer nodeNextCount = nodeNextMap.computeIfAbsent(linkId, k -> 0);
        nodeNextMap.put(linkId, nodeNextCount + 1);
    }

    @Override
    public synchronized void link(Long nodeId, List<Long> linkIds) {
        if (!CollectionUtils.isEmpty(linkIds)) {
            for (Long linkId : linkIds) {
                link(nodeId, linkId);
            }
        }
    }

    /*
     * nodeId next reduce linkId count
     */
    public synchronized void unlink(Long nodeId, Long linkId) {
        Map<Long, Integer> nodeNextMap = atlasMap.get(nodeId);
        if (nodeNextMap != null) {
            Integer nodeNextCount = nodeNextMap.get(linkId);
            if (nodeNextCount != null) {
                if (nodeNextCount <= 1) {
                    nodeNextMap.remove(linkId);
                    if (CollectionUtils.isEmpty(nodeNextMap)) {
                        atlasMap.remove(nodeId);
                    }
                } else {
                    nodeNextMap.put(linkId, nodeNextCount - 1);
                }
            }
        }
    }

    @Override
    public synchronized void exchangeLink(Long nodeId, Long originId, Long exchangeId) {
        unlink(nodeId, originId);
        link(nodeId, exchangeId);
    }

    @Override
    public long getVersion() {
        synchronized (CHANGE_LOCK) {
            return this.version++;
        }
    }

    @Override
    @Transactional
    public IceTransferDto release(int app, long iceId) {
        synchronized (CHANGE_LOCK) {
            Map<Long, Map<Long, IceConf>> iceUpdateMap = confUpdateMap.get(app);
            if (CollectionUtils.isEmpty(iceUpdateMap)) {
                return null;
            }
            Map<Long, IceConf> confUpdateMap = iceUpdateMap.get(iceId);
            if (CollectionUtils.isEmpty(confUpdateMap)) {
                return null;
            }
            Collection<IceConf> confUpdates = confUpdateMap.values();
            for (IceConf conf : confUpdates) {
                IceConf oldConf = confMapper.selectByPrimaryKey(conf.getConfId());
                conf.setUpdateAt(new Date());
                long updateId = conf.getId();
                conf.setId(conf.getConfId());
                if (oldConf == null) {
                    confMapper.insertWithId(conf);
                } else {
                    confMapper.updateByPrimaryKey(conf);
                }
                confUpdateMapper.deleteByPrimaryKey(updateId);
            }
            List<IceConfDto> confUpdateDtos = new ArrayList<>(confUpdates.size());
            for (IceConf conf : confUpdates) {
                conf.setId(conf.getConfId());
                conf.setConfId(null);
                conf.setIceId(null);
                confUpdateDtos.add(Constant.confToDto(conf));
                updateLocalConfActiveCache(conf);
            }
            iceUpdateMap.remove(iceId);
            IceTransferDto transferDto = new IceTransferDto();
            transferDto.setInsertOrUpdateConfs(confUpdateDtos);
            transferDto.setVersion(++version);
            return transferDto;
        }
    }

    @Override
    public void updateClean(int app, long iceId) {
        synchronized (CHANGE_LOCK) {
            Map<Long, Map<Long, IceConf>> iceUpdateMap = confUpdateMap.get(app);
            if (CollectionUtils.isEmpty(iceUpdateMap)) {
                return;
            }
            Map<Long, IceConf> confUpdateMap = iceUpdateMap.get(iceId);
            if (CollectionUtils.isEmpty(confUpdateMap)) {
                return;
            }
            Collection<IceConf> confUpdates = confUpdateMap.values();
            for (IceConf conf : confUpdates) {
                confUpdateMapper.deleteByPrimaryKey(conf.getId());
            }
            iceUpdateMap.remove(iceId);
        }
    }

    @Override
    public Collection<IceConf> getAllUpdateConfList(int app, long iceId) {
        synchronized (CHANGE_LOCK) {
            Map<Long, Map<Long, IceConf>> iceUpdateMap = confUpdateMap.get(app);
            if (CollectionUtils.isEmpty(iceUpdateMap)) {
                return null;
            }
            Map<Long, IceConf> confUpdateMap = iceUpdateMap.get(iceId);
            if (CollectionUtils.isEmpty(confUpdateMap)) {
                return null;
            }
            return confUpdateMap.values();
        }
    }

    @Override
    public Set<IceConf> getAllActiveConfSet(int app, long rootId) {
        synchronized (CHANGE_LOCK) {
            Map<Long, IceConf> confMap = confActiveMap.get(app);
            if (CollectionUtils.isEmpty(confMap)) {
                return null;
            }
            Set<IceConf> resultSet = new HashSet<>();
            assembleActiveConf(confMap, resultSet, rootId);
            return resultSet;
        }
    }

    private void assembleActiveConf(Map<Long, IceConf> map, Set<IceConf> confSet, long nodeId) {
        IceConf conf = map.get(nodeId);
        if (conf == null) {
            return;
        }
        confSet.add(conf);
        if (NodeTypeEnum.isRelation(conf.getType())) {
            if (StringUtils.hasLength(conf.getSonIds())) {
                String[] sonIdStrs = conf.getSonIds().split(",");
                for (String sonIdStr : sonIdStrs) {
                    long sonId = Long.parseLong(sonIdStr);
                    assembleActiveConf(map, confSet, sonId);
                }
            }
        }
        if (conf.getForwardId() != null) {
            assembleActiveConf(map, confSet, conf.getForwardId());
        }
    }

    @Override
    public IceConf getActiveConfById(Integer app, Long confId) {
        synchronized (CHANGE_LOCK) {
            Map<Long, IceConf> confMap = confActiveMap.get(app);
            if (!CollectionUtils.isEmpty(confMap)) {
                return confMap.get(confId);
            }
            return null;
        }
    }

    @Override
    public List<IceConf> getMixConfListByIds(Integer app, Set<Long> confSet, long iceId) {
        if (CollectionUtils.isEmpty(confSet)) {
            return null;
        }
        List<IceConf> confList = new ArrayList<>(confSet.size());
        for (Long confId : confSet) {
            IceConf conf = this.getMixConfById(app, confId, iceId);
            if (conf == null) {
                /*one of confId not exist return null*/
                return null;
            }
            confList.add(conf);
        }
        return confList;
    }

    @Override
    public IceConf getMixConfById(int app, long confId, long iceId) {
        synchronized (CHANGE_LOCK) {
            Map<Long, Map<Long, IceConf>> updateMap = confUpdateMap.get(app);
            if (!CollectionUtils.isEmpty(updateMap)) {
                Map<Long, IceConf> confUpdateMap = updateMap.get(iceId);
                if (!CollectionUtils.isEmpty(confUpdateMap)) {
                    IceConf conf = confUpdateMap.get(confId);
                    if (conf != null) {
                        return conf;
                    }
                }
            }
            Map<Long, IceConf> activeMap = confActiveMap.get(app);
            if (!CollectionUtils.isEmpty(activeMap)) {
                return newConf(activeMap.get(confId));
            }
        }
        return null;
    }

    private IceConf newConf(IceConf conf) {
        if (conf == null) {
            return null;
        }
        IceConf newConf = new IceConf();
        newConf.setId(conf.getId());
        newConf.setConfName(conf.getConfName());
        newConf.setDebug(conf.getDebug());
        newConf.setInverse(conf.getInverse());
        newConf.setStatus(conf.getStatus());
        newConf.setTimeType(conf.getTimeType());
        newConf.setSonIds(conf.getSonIds());
        newConf.setForwardId(conf.getForwardId());
        newConf.setStart(conf.getStart());
        newConf.setEnd(conf.getEnd());
        newConf.setApp(conf.getApp());
        newConf.setUpdateAt(conf.getUpdateAt());
        newConf.setCreateAt(conf.getCreateAt());
        newConf.setConfField(conf.getConfField());
        newConf.setName(conf.getName());
        newConf.setType(conf.getType());
        return newConf;
    }

    @Override
    public IceShowNode getConfMixById(int app, long confId, long iceId) {
        synchronized (CHANGE_LOCK) {
            Map<Long, Map<Long, IceConf>> updateShowMap = confUpdateMap.get(app);
            Map<Long, IceConf> updateMap = null;
            if (!CollectionUtils.isEmpty(updateShowMap)) {
                updateMap = updateShowMap.get(iceId);
            }
            Map<Long, IceConf> activeMap = confActiveMap.get(app);
            IceConf root = getConf(confId, updateMap, activeMap);
            return assembleShowNode(root, updateMap, activeMap);
        }
    }

    private IceConf getConf(Long confId, Map<Long, IceConf> updateMap, Map<Long, IceConf> activeMap) {
        if (!CollectionUtils.isEmpty(updateMap)) {
            IceConf confUpdate = updateMap.get(confId);
            if (confUpdate != null) {
                return confUpdate;
            }
        }
        if (!CollectionUtils.isEmpty(activeMap)) {
            return activeMap.get(confId);
        }
        return null;
    }

    private IceShowNode assembleShowNode(IceConf node, Map<Long, IceConf> updateMap, Map<Long, IceConf> activeMap) {
        if (node == null) {
            return null;
        }
        IceShowNode showNode = Constant.confToShow(node);
        if (NodeTypeEnum.isRelation(node.getType()) && StringUtils.hasLength(showNode.getSonIds())) {
            String[] sonIdStrs = showNode.getSonIds().split(",");
            List<Long> sonIds = new ArrayList<>(sonIdStrs.length);
            for (String sonStr : sonIdStrs) {
                sonIds.add(Long.valueOf(sonStr));
            }
            List<IceShowNode> children = new ArrayList<>(sonIdStrs.length);
            for (int i = 0; i < sonIds.size(); i++) {
                IceConf child = getConf(sonIds.get(i), updateMap, activeMap);
                if (child != null) {
                    IceShowNode showChild = assembleShowNode(child, updateMap, activeMap);
                    showChild.setParentId(node.getMixId());
                    showChild.setIndex(i);
                    children.add(showChild);
                }
            }
            showNode.setChildren(children);
        }

        if (showNode.getForwardId() != null) {
            IceShowNode forwardNode = assembleShowNode(getConf(showNode.getForwardId(), updateMap, activeMap), updateMap, activeMap);
            if (forwardNode != null) {
                forwardNode.setNextId(node.getMixId());
                showNode.setForward(forwardNode);
            }
        }
        return showNode;
    }

    @Override
    public IceBase getActiveBaseById(Integer app, Long iceId) {
        synchronized (CHANGE_LOCK) {
            Map<Long, IceBase> confMap = baseActiveMap.get(app);
            if (!CollectionUtils.isEmpty(confMap)) {
                return confMap.get(iceId);
            }
        }
        return null;
    }

    @Override
    public void updateLocalConfUpdateCache(IceConf conf) {
        synchronized (CHANGE_LOCK) {
            confUpdateMap.computeIfAbsent(conf.getApp(), k -> new HashMap<>()).computeIfAbsent(conf.getIceId(), k -> new HashMap<>()).put(conf.getMixId(), conf);
        }
    }

    @Override
    public void updateLocalConfUpdateCaches(Collection<IceConf> confs) {
        synchronized (CHANGE_LOCK) {
            for (IceConf conf : confs) {
                updateLocalConfUpdateCache(conf);
            }
        }
    }

    public void updateLocalConfActiveCache(IceConf conf) {
        synchronized (CHANGE_LOCK) {
            confActiveMap.computeIfAbsent(conf.getApp(), k -> new HashMap<>()).put(conf.getMixId(), conf);
        }
    }

    @Override
    public void updateLocalConfActiveCaches(Collection<IceConf> confs) {
        for (IceConf conf : confs) {
            updateLocalConfActiveCache(conf);
        }
    }

    @Override
    public void updateLocalBaseActiveCache(IceBase base) {
        synchronized (CHANGE_LOCK) {
            baseActiveMap.computeIfAbsent(base.getApp(), k -> new HashMap<>()).put(base.getId(), base);
        }
    }

    @Override
    public Map<String, Integer> getLeafClassMap(Integer app, Byte type) {
        Map<Byte, Map<String, Integer>> map = leafClassMap.get(app);
        if (map != null) {
            return map.get(type);
        }
        return null;
    }

    @Override
    public void removeLeafClass(Integer app, Byte type, String clazz) {
        Map<Byte, Map<String, Integer>> map = leafClassMap.get(app);
        if (!CollectionUtils.isEmpty(map)) {
            Map<String, Integer> typeMap = map.get(type);
            if (!CollectionUtils.isEmpty(typeMap)) {
                typeMap.remove(clazz);
            }
        }
    }

    @Override
    public void addLeafClass(Integer app, Byte type, String clazz) {
        Map<Byte, Map<String, Integer>> map = leafClassMap.get(app);
        Map<String, Integer> classMap;
        if (map == null) {
            map = new HashMap<>();
            leafClassMap.put(app, map);
            classMap = new HashMap<>();
            map.put(type, classMap);
            classMap.put(clazz, 0);
        } else {
            classMap = map.get(type);
            if (classMap == null) {
                classMap = new HashMap<>();
                map.put(type, classMap);
                classMap.put(clazz, 0);
            } else {
                classMap.putIfAbsent(clazz, 0);
            }
        }
        classMap.put(clazz, classMap.get(clazz) + 1);
    }

    @Override
    public void afterPropertiesSet() {
        /*baseList*/
        IceBaseExample baseExample = new IceBaseExample();
        baseExample.createCriteria().andStatusEqualTo(StatusEnum.ONLINE.getStatus());
        List<IceBase> baseList = baseMapper.selectByExample(baseExample);

        if (!CollectionUtils.isEmpty(baseList)) {
            for (IceBase base : baseList) {
                baseActiveMap.computeIfAbsent(base.getApp(), k -> new HashMap<>()).put(base.getId(), base);
            }
        }
        /*UpdateList*/
        IceConfExample confUpdateExample = new IceConfExample();
        confUpdateExample.createCriteria().andStatusEqualTo(StatusEnum.ONLINE.getStatus());
        List<IceConf> confUpdateList = confUpdateMapper.selectByExample(confUpdateExample);
        Set<Long> updateIdSet = new HashSet<>();
        if (!CollectionUtils.isEmpty(confUpdateList)) {
            for (IceConf conf : confUpdateList) {
                updateIdSet.add(conf.getMixId());
                confUpdateMap.computeIfAbsent(conf.getApp(), k -> new HashMap<>()).computeIfAbsent(conf.getIceId(), k -> new HashMap<>()).put(conf.getMixId(), conf);
                assembleAtlas(conf);
                assembleLeafClass(conf);
            }
        }
        /*ConfList*/
        IceConfExample confExample = new IceConfExample();
        confExample.createCriteria().andStatusEqualTo(StatusEnum.ONLINE.getStatus());
        List<IceConf> confList = confMapper.selectByExample(confExample);
        if (!CollectionUtils.isEmpty(confList)) {
            for (IceConf conf : confList) {
                confActiveMap.computeIfAbsent(conf.getApp(), k -> new HashMap<>()).put(conf.getMixId(), conf);
                if (!updateIdSet.contains(conf.getMixId())) {
                    assembleAtlas(conf);
                }
                assembleLeafClass(conf);
            }
        }
    }

    private void assembleAtlas(IceConf conf) {
        if (NodeTypeEnum.isRelation(conf.getType()) && StringUtils.hasLength(conf.getSonIds())) {
            String[] sonIdStrs = conf.getSonIds().split(",");
            for (String sonIdStr : sonIdStrs) {
                Long sonId = Long.parseLong(sonIdStr);
                Map<Long, Integer> nextMap = atlasMap.computeIfAbsent(conf.getMixId(), k -> new HashMap<>());
                int nextCount = nextMap.computeIfAbsent(sonId, k -> 0);
                nextCount += 1;
                nextMap.put(sonId, nextCount);
            }
        }
        if (conf.getForwardId() != null) {
            Map<Long, Integer> nextMap = atlasMap.computeIfAbsent(conf.getMixId(), k -> new HashMap<>());
            int nextCount = nextMap.computeIfAbsent(conf.getForwardId(), k -> 0);
            nextCount += 1;
            nextMap.put(conf.getForwardId(), nextCount);
        }
    }

    private void assembleLeafClass(IceConf conf) {
        if (NodeTypeEnum.isLeaf(conf.getType())) {
            Map<Byte, Map<String, Integer>> map = leafClassMap.get(conf.getApp());
            Map<String, Integer> classMap;
            if (map == null) {
                map = new HashMap<>();
                leafClassMap.put(conf.getApp(), map);
                classMap = new HashMap<>();
                map.put(conf.getType(), classMap);
                classMap.put(conf.getConfName(), 0);
            } else {
                classMap = map.get(conf.getType());
                if (classMap == null) {
                    classMap = new HashMap<>();
                    map.put(conf.getType(), classMap);
                    classMap.put(conf.getConfName(), 0);
                } else {
                    classMap.putIfAbsent(conf.getConfName(), 0);
                }
            }
            classMap.put(conf.getConfName(), classMap.get(conf.getConfName()) + 1);
        }
    }

    public Collection<IceConfDto> getActiveConfsByApp(Integer app) {
        Map<Long, IceConf> map = confActiveMap.get(app);
        if (map == null) {
            return Collections.emptyList();
        }
        return Constant.confListToDtoList(map.values());
    }

    public Collection<IceBaseDto> getActiveBasesByApp(Integer app) {
        Map<Long, IceBase> map = baseActiveMap.get(app);
        if (map == null) {
            return Collections.emptyList();
        }
        return Constant.baseListToDtoList(map.values());
    }

    @Override
    public IceTransferDto getInitConfig(Integer app) {
        synchronized (CHANGE_LOCK) {
            IceTransferDto transferDto = new IceTransferDto();
            transferDto.setInsertOrUpdateBases(this.getActiveBasesByApp(app));
            transferDto.setInsertOrUpdateConfs(this.getActiveConfsByApp(app));
            transferDto.setVersion(version);
            return transferDto;
        }
    }
}
