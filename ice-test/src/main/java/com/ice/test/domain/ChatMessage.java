package com.ice.test.domain;

/**
 * @Classname ChatMessage
 * @Description 发送消息列表
 * @Date 2023/3/11 11:49
 * @Created by FunCoder
 */
public class ChatMessage {

    private String text;

    private String sender;

    private String receiver;

    private String sendtime;

    public ChatMessage(String text, String sender, String receiver, String sendtime) {
        this.text = text;
        this.sender = sender;
        this.receiver = receiver;
        this.sendtime = sendtime;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getSendtime() {
        return sendtime;
    }

    public void setSendtime(String sendtime) {
        this.sendtime = sendtime;
    }

    @Override
    public String toString() {
        return "ChatMessage{" +
                "text='" + text + '\'' +
                ", sender='" + sender + '\'' +
                ", receiver='" + receiver + '\'' +
                ", sendtime='" + sendtime + '\'' +
                '}';
    }
}
