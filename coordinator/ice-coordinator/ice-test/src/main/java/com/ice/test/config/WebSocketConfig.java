package com.ice.test.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

@Configuration
@EnableWebSocketMessageBroker//启用消息代理使用websocket
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Bean
    public ServerEndpointExporter serverEndpointExporter()
    {
        return new ServerEndpointExporter();
    }


    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {

        config.enableSimpleBroker("/topic");//够在以/topic为前缀的目的地上将欢迎消息传回客户机
        config.setApplicationDestinationPrefixes("/app");//带有@MessageMapping注释的方法的消息指定/app为前缀
        //这个前缀将用于定义所有消息映射。例如，/app/hello是GreetingController.greeting()方法映射要处理的端点。
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        /* registerStompEndpoints注册了终端名称为gs-guide-websocket启用SockJS后备选项，以便在WebSocket不可用的情况下使用备用传输
         * SockJS客户端将尝试连接到/gs-guide-websocket，并使用最好的可用传输(websocket, xhr-streaming, xhr-polling，等等)。
         * */
        registry.addEndpoint("/gs-guide-websocket").setAllowedOriginPatterns("*").withSockJS();
    }
}