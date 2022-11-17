package com.ice.test.result;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ice.core.context.IceRoam;
import com.ice.core.leaf.roam.BaseLeafRoamResult;
import com.ice.test.domain.Suplier;
import com.ice.test.mapper.SuplierMapper;
import com.ice.test.service.SendService;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.beans.factory.annotation.Autowired;
import javax.annotation.Resource;
import java.util.List;


@Data
@EqualsAndHashCode(callSuper = true)
public class AmountResult extends BaseLeafRoamResult {
    // {"key":"uid","value":5}
    @Resource
    private SendService sendService;
    @Autowired
    private SuplierMapper suplierMapper;

    private String key;

    private String value;

    @Override
    protected boolean doRoamResult(IceRoam roam) {
        Integer uid = roam.getMulti(key);
        if (uid == null ) {
            return false;
        }
        //查出价格最低的供应商信息
        QueryWrapper<Suplier> queryWrapper=new QueryWrapper<>();
        queryWrapper.orderByAsc("price");
        List<Suplier> supliers = suplierMapper.selectList(queryWrapper);
        Suplier suplier = supliers.get(0);
        boolean res = sendService.sendAmount(uid, value);
        roam.put("SEND_RESULT", res);
        roam.put("value",value);
        roam.put("suplier",suplier);
        return res;
    }
}
