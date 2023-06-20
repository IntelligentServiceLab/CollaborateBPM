package com.ice.test.service.impl;

import com.ice.test.domain.ReceiverMessage;
import com.ice.test.mapper.ReceiverMessageMapper;
import com.ice.test.service.ReceiverMessageService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * @Classname ReceiverMessageService
 * @Description TODO
 * @Date 2023/4/18 10:49
 * @Created by FunCoder
 */

@Service
public class ReceiverMessageServiceImpl implements ReceiverMessageService {

    @Resource
    ReceiverMessageMapper receiverMessageMapper;

    @Override
    public ReceiverMessage getReceiverByAccount(String account) {
        return receiverMessageMapper.selectReceiverByAccount(account);
    }

    @Override
    public int insertReceiverMessage(ReceiverMessage receiverMessage) {
        return receiverMessageMapper.insertReceiverMessage(receiverMessage);
    }

    @Override
    public int deleteReceiverMessageByAccount(String account) {
        return receiverMessageMapper.deleteReceiverMessageByAccount(account);
    }

    @Override
    public int deleteReceiverMessageByTelephone(String telephone) {
        return receiverMessageMapper.deleteReceiverMessageByTelephone(telephone);
    }

    @Override
    public ReceiverMessage getReceiverByTelephone(String telephone) {
        return receiverMessageMapper.selectReceiverByTelephone(telephone);
    }
}
