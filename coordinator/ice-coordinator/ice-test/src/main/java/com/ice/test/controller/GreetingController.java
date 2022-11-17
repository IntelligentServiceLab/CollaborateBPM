package com.ice.test.controller;


import com.ice.test.domain.Greeting;
import com.ice.test.domain.HelloMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;
import java.util.Date;
import java.util.concurrent.CopyOnWriteArraySet;

@Controller
public class GreetingController {
    //静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
    private static int onlineCount = 0;
    //concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。若要实现服务端与单一客户端通信的话，可以使用Map来存放，其中Key可以为用户标识
    public static CopyOnWriteArraySet<GreetingController> webSocketSet = new CopyOnWriteArraySet<GreetingController>();

    @MessageMapping("/hello")//@MessageMapping注释确保，如果消息被发送到/hello目的地，则调用greeting()方法。
    @SendTo("/topic/greetings")
    //greeting()方法创建一个greeting对象并返回它。
    // 返回值将广播给/topic/greeting的所有订阅者，
    // 如@SendTo注释中所指定的那样。请注意，输入消息中的名称是经过消毒的，
    // 因为在这种情况下，它将被回显并在客户端的浏览器DOM中重新呈现。
    public Greeting greeting(HelloMessage message) throws Exception {//消息的有效负载被绑定到HelloMessage对象，该对象被传递到greeting()中。
        Thread.sleep(500); // simulated delay
        webSocketSet.add(this);     //加入set中
        addOnlineCount();
        return new Greeting("发布： " + HtmlUtils.htmlEscape(message.getName()) + "!  "+"任务时间  "+new Date());//htmlEscape将特殊字符转换为HTML字符引用。
    }

    @MessageMapping("/send")//@MessageMapping注释确保，如果消息被发送到/hello目的地，则调用greeting()方法。
    @SendTo("/topic/list")
    public Greeting hello(HelloMessage message) throws InterruptedException {
        Thread.sleep(500); // simulated delay
        return new Greeting("发布： " + HtmlUtils.htmlEscape(message.getName()) + "!  "+"任务时间  "+new Date());
    }

    public static synchronized void addOnlineCount() {
        GreetingController.onlineCount++;
    }

}