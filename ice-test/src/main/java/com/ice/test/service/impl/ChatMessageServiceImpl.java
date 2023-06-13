package com.ice.test.service.impl;


import com.ice.test.domain.ChatMessage;
import com.ice.test.mapper.ChatMessageMapper;
import com.ice.test.service.ChatMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Classname ChatMessageServiceImpl
 * @Description 消息业务类
 * @Date 2023/3/11 14:17
 * @Created by FunCoder
 */
@Service
public class ChatMessageServiceImpl implements ChatMessageService {


    private static ChatMessageMapper chatMessageMapper;

    @Autowired
    public void setChatMessageMapper(ChatMessageMapper chatMessageMapper) {
        this.chatMessageMapper = chatMessageMapper;
    }

    @Override
    public void saveMessage(ChatMessage chatMessage) {
        chatMessageMapper.insertMessage(chatMessage);
    }

    @Override
    public List<ChatMessage> getMessageHistory(String sender, String receiver) {
        return chatMessageMapper.selectMessageHistory(sender,receiver);
    }
}
