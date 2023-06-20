package com.ice.test.service;

import com.ice.test.domain.ReceiverMessage;

/**
 * @Classname ReceiverMessageService
 * @Description TODO
 * @Date 2023/4/18 10:50
 * @Created by FunCoder
 */
public interface ReceiverMessageService {

    /**
     * 根据账号名获取接收者基本信息
     * @param account
     * @return
     */
    ReceiverMessage getReceiverByAccount(String account);

    int insertReceiverMessage(ReceiverMessage receiverMessage);

    int deleteReceiverMessageByAccount(String account);

    int deleteReceiverMessageByTelephone(String telephone);

    ReceiverMessage getReceiverByTelephone(String telephone);
}
