package com.ice.test.config;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class LoginHandlerIntercepter implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //登录成功之后，有了session
        Object object = request.getSession().getAttribute("account");//request获取session对象的方法
        if (object == null) {
            response.sendRedirect("/toLogin");//这里要把注册页面请求路径排除
            return false;
        } else {
            return true;
        }
    }
}
