package com.ice.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.websocket.Session;


/**
 * @Classname LoginController
 * @Description 登录接口
 * @Date 2023/2/24 15:50
 * @Created by FunCoder
 */

@Controller
public class LoginController {

    @GetMapping("/test")
    @ResponseBody
    public String test(){
        System.out.println("diede");
        return "deude";
    }

    /**
     * 登录系统:登录系统时要对用户信息Map进行更改，判断是否以前有session记录。如果没有则插入，如果有则更新
     * @param user
     * @param model
     * @return
     */
    @PostMapping("/login")
    public String getLogin(@RequestBody MultiValueMap<String,String> user, Model model, Session session){
        String username = user.getFirst("userName");
        model.addAttribute("username",username);
        return "login";
    }
}
