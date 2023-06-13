package com.ice.test.service;

import com.ice.test.domain.AreaPolicy;

import java.util.List;

public interface AreaService {

    /**
     * 根据领域名称查找对应的领域策略
     *
     * @return
     */
    List<AreaPolicy> getAreaPolicyByArea(String area);
}
