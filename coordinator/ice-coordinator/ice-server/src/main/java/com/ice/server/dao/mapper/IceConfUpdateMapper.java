package com.ice.server.dao.mapper;

import com.ice.server.dao.model.IceConf;
import com.ice.server.dao.model.IceConfExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IceConfUpdateMapper {
    long countByExample(IceConfExample example);

    int deleteByExample(IceConfExample example);

    int deleteByPrimaryKey(Long id);

    int insert(IceConf record);

    int insertWithId(IceConf record);

    int insertSelective(IceConf record);

    int insertSelectiveWithId(IceConf record);

    List<IceConf> selectByExample(IceConfExample example);

    IceConf selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") IceConf record, @Param("example") IceConfExample example);

    int updateByExample(@Param("record") IceConf record, @Param("example") IceConfExample example);

    int updateByPrimaryKeySelective(IceConf record);

    int updateByPrimaryKey(IceConf record);
}