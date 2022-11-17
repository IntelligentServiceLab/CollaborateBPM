package com.dstz.sys.core.dao;

import com.dstz.sys.core.model.Shipb;
import com.dstz.sys.core.model.Test;
import org.apache.ibatis.annotations.Param;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Repository;

import java.util.List;

@MapperScan
@Repository
public interface TestDao {
    List<Test> findTest();
    List<Shipb> findshipb();

}
