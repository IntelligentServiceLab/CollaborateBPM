package com.ice.test.util;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.ice.test.domain.ChatMessage;
import com.ice.test.service.ChatMessageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;


/**
 * @Classname WebSocketServe
 * @Description 提供任务发布者和接受者的聊天通讯
 * @Date 2023/3/10 10:22
 * @Created by FunCoder
 */

@Component
@ServerEndpoint("/chat/{username}")
public class WebSocketServer {


    /*
    * 在component注解类中引入service
    * */
    @Autowired
    ChatMessageService chatMessageService;

    private static WebSocketServer webSocketServer;

    @PostConstruct
    public void init(){
        webSocketServer = this;
        webSocketServer.chatMessageService = this.chatMessageService;
    }


    private static final Logger log = LoggerFactory.getLogger(WebSocketServer.class);

    /**
     * 在线用户信息：以用户的姓名为key，session为对象保存起来。这里在线指的是在该聊天室的人员
     */
    public static final Map<String, Session> sessionMap = new ConcurrentHashMap<>();

    /**
     * 连接建立成功调用的方法
     * 这里主要的步骤就是将浏览器username和session存储在一个map中，然后将key值也就是username拿出来专门放置
     * array装有username集合，通过array将其发送给所有客户端，使得谁加入聊天室，谁不在线很容易看到
     * onOpen主要是加入聊天室应该的效果：建立连接 在线状态可视。
     * 不过这里的需求是不需要告知对方是否在线，也就是不需要进行前端显示，前端只需要发送消息就行了
     */
    @OnOpen
    public void onOpen(Session session, @PathParam("username") String username) {
        sessionMap.put(username, session);
        log.info("有新用户加入，username={}, 当前在线人数为：{}", username, sessionMap.size());
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose(Session session, @PathParam("username") String username) {
        sessionMap.remove(username);
        log.info("有一连接关闭，移除username={}的用户session, 当前在线人数为：{}", username, sessionMap.size());
    }

    /**
     * 消息通信的方法
     * 收到客户端消息后调用的方法
     * 后台收到客户端发送过来的消息
     * onMessage 是一个消息的中转站
     * 接受 浏览器端 socket.send 发送过来的 json数据
     * 消息全部存入数据库
     * @param message 客户端发送过来的消息
     */
    @OnMessage
    public void onMessage(String message, @PathParam("username") String username) {
        // message:{"to": "admin", "text": "聊天文本"}
        log.info("服务端收到用户username={}的消息:{}", username, message);
        JSONObject obj = JSON.parseObject(message);
        //发送时只需要指明要发送给谁（信息），然后携带自身身份做另外的参数。接收时只需要明白接收的人是谁
        String toUsername = (String) obj.get("to"); // to表示发送给哪个用户，比如 admin
        String text = (String) obj.get("text"); // 发送的消息文本  hello
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        String sendtime = simpleDateFormat.format(date);
        /*
        * 这里主要是两步：
        * 第一步是将消息存入数据库之中；
        * 第二步是将消息转发给在线的对方
        * */
        //第一步：
        System.out.println(webSocketServer.chatMessageService);
        ChatMessage chatMessage = new ChatMessage(text,username,toUsername,sendtime);
        try{
            System.out.println("ugded");
            webSocketServer.chatMessageService.saveMessage(chatMessage);
        }catch (Exception e){
            e.printStackTrace();
        }
        Session toSession = sessionMap.get(toUsername); // 根据 to用户名来获取 session，再通过session发送消息文本
        //第二步:
        if (toSession != null) {
            // 服务器端 再把消息组装一下，组装后的消息包含发送人和发送的文本内容
            // {"from": "zhang", "text": "hello"}
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("from", username);  // from 是 zhang
            jsonObject.put("text", text);  // text 同上面的text
            this.sendMessage(jsonObject.toString(), toSession);
            log.info("发送给用户username={}，消息：{}", toUsername, jsonObject.toString());

        } else {//离线发布
            log.info("发送失败，未找到用户username={}的session,存入数据库做离线消息处理", toUsername);
        }
        //将消息插入数据库进行保存

    }

    @OnError
    public void onError(Session session, Throwable error) {
        log.error("发生错误");
        error.printStackTrace();
    }

    /**
     * 服务端发送消息给客户端
     */
    private void sendMessage(String message, Session toSession) {
        try {
            log.info("服务端给客户端[{}]发送消息{}", toSession.getId(), message);
            toSession.getBasicRemote().sendText(message);
        } catch (Exception e) {
            log.error("服务端发送消息给客户端失败", e);
        }
    }

    /**
     * 服务端发送消息给所有客户端
     */
    private void sendAllMessage(String message) {
        try {
            for (Session session : sessionMap.values()) {
                log.info("服务端给客户端[{}]发送消息{}", session.getId(), message);
                session.getBasicRemote().sendText(message);
            }
        } catch (Exception e) {
            log.error("服务端发送消息给客户端失败", e);
        }
    }

}
