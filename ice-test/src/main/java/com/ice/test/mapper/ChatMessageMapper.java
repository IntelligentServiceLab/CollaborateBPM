package com.ice.test.mapper;


import com.ice.test.domain.ChatMessage;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @Classname ChatMessageMapper
 * @Description 消息存储
 * @Date 2023/3/11 12:07
 * @Created by FunCoder
 */
@Mapper
@Repository
public interface ChatMessageMapper {
    void insertMessage(ChatMessage chatMessage);

    List<ChatMessage> selectMessageHistory(String sender,String receiver);
}
