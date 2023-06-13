package com.ice.test.service;



import com.ice.test.domain.ChatMessage;

import java.util.List;

/**
 * @Classname ChatMessageService
 * @Description TODO
 * @Date 2023/3/11 14:17
 * @Created by FunCoder
 */
public interface ChatMessageService {

    /**
     * 消息存储业务：将系统收发的消息进行存储
     * @param chatMessage
     */
    void saveMessage(ChatMessage chatMessage);

    /**
     * 历史聊天记录加载业务：将存入在数据库的双方交流的历史信息进行加载显示
     * @param sender
     * @param receiver
     * @return
     */
    List<ChatMessage> getMessageHistory(String sender,String receiver);
}
