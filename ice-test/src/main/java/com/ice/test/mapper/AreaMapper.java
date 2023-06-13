package com.ice.test.mapper;


import com.ice.test.domain.AreaPolicy;

import java.util.List;

public interface AreaMapper {

    /**
     * 根据主键area查询对应的领域策略集
     *
     * @return
     */
    List<AreaPolicy> selectAreaPolicyByArea(String area);
}
