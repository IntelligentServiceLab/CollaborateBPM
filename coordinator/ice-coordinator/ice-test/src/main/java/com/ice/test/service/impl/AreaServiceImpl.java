package com.ice.test.service.impl;

import com.ice.test.domain.AreaPolicy;
import com.ice.test.mapper.AreaMapper;
import com.ice.test.service.AreaService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class AreaServiceImpl implements AreaService {

    @Resource
    AreaMapper areaMapper;

    @Override
    public List<AreaPolicy> getAreaPolicyByArea(String area) {
        return areaMapper.selectAreaPolicyByArea(area);
    }
}
