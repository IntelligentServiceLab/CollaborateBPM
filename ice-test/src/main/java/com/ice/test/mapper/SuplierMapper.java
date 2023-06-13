package com.ice.test.mapper;

import com.ice.test.domain.ChatMessage;
import com.ice.test.domain.Suplier;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
* @author 18385
* @description 针对表【user_suplier】的数据库操作Mapper
* @createDate 2022-09-22 13:25:46
* @Entity com.ice.test.domain.Suplier
*/
@Mapper
@Repository
public interface SuplierMapper extends BaseMapper<Suplier> {


    void insertSuplier(Suplier Suplier);
}




