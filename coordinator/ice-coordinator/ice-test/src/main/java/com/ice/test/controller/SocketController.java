package com.ice.test.controller;


import com.ice.test.domain.ChatMessage;
import com.ice.test.service.ChatMessageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Controller
public class SocketController {

    @Resource
    ChatMessageService chatMessageService;

    /**
     * 这里主要是负责页面的跳转：转发发送者信息、接收者信息。同时对于聊天信息进行查询，相当于保留了历史记录
     * @param username
     * @param toUserName
     * @param model
     * @return
     */
    @RequestMapping("/chat")
    public String chatSocket(@RequestParam("method") Integer method, @RequestParam("username") String username, @RequestParam("toUserName") String toUserName, Model model){
        try{
            log.info("跳转任务聊天的页面上");
            model.addAttribute("username",username);
            model.addAttribute("toUserName",toUserName);
            //离线聊天：加载一下聊天记录
            List<ChatMessage> chatMessages = chatMessageService.getMessageHistory(username,toUserName);
            model.addAttribute("chatMessages",chatMessages);
            //实时聊天：这里还要判断发送者是任务发布者还是任务接收者，方便头像的确定，我们规定发布者采用女孩头像，处理者采用男孩头像
            model.addAttribute("method",method);
            return "chatRoom";
        }catch (Exception e){
            log.info("跳转到websocket的页面上发生异常，异常信息是："+e.getMessage());
            return "error";
        }
    }



}