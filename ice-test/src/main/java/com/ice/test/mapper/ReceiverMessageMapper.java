package com.ice.test.mapper;

import com.ice.test.domain.ReceiverMessage;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * @Classname ReceiverMapper
 * @Description 接收者信息表处理
 * @Date 2023/4/18 10:43
 * @Created by FunCoder
 */
@Mapper
@Repository
public interface ReceiverMessageMapper {

    ReceiverMessage selectReceiverByAccount(String account);

    int insertReceiverMessage(ReceiverMessage receiverMessage);

    int deleteReceiverMessageByAccount(String account);

    int deleteReceiverMessageByTelephone(String telephone);

    ReceiverMessage selectReceiverByTelephone(String telephone);
}
