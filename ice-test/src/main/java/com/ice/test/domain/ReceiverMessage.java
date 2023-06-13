package com.ice.test.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Classname ReceiverMessage
 * @Description 接收者基本信息
 * @Date 2023/4/18 10:22
 * @Created by FunCoder
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReceiverMessage {

    private String username;    //接收者名字

    private String account;     //接受者账号

    private String email;       //接收者邮箱

    private String telephone;   //接收者电话

    private String weichat;     //接收者微信
}
