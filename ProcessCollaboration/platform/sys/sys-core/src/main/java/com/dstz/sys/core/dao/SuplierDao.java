package com.dstz.sys.core.dao;

import com.dstz.sys.core.model.Suplier;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Repository;

@Repository
@MapperScan
public interface SuplierDao {
    public int insertALL(Suplier suplier);

}
