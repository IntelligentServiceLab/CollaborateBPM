package com.ice.test.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @Classname MyWebMvcConfigurer
 * @Description 页面跳转和拦截器
 * @Date 2023/2/24 16:05
 * @Created by FunCoder
 */
@Configuration
public class MyWebMvcConfigurer implements WebMvcConfigurer {
    @Value("${resourceLocations}")
    private String resourceLocations;

    /**
     * 添加资源访问路径，允许直接访问
     * @param registry
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        //WINDOWS用
        //registry.addResourceHandler("/img/**").addResourceLocations("file:D:/Jetbrains2022/WorkSpace/IDEAWorkSpace/rv/src/main/resources/static/goodpic/");
        //LINUX用
        //registry.addResourceHandler("/img/**").addResourceLocations("file:/usr/local/img/");
        registry.addResourceHandler("/taskImages/**").addResourceLocations("file:"+resourceLocations);
    }

    /**
     * 任务发布页面
     * @param registry
     */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        //跳转到登录页面：更新用户对应session
        registry.addViewController("/toLogin").setViewName("login");
        registry.addViewController("/").setViewName("login");
       /* //跳转到任务发布页面:发布任务供其它人处理
        registry.addViewController("/publishTasks").setViewName("publishTasks");
        //跳转到可接收任务页面：接收他人任务
        registry.addViewController("/showTasks").setViewName("showTasks");
        //跳转到自己正在处理的页面：处理任务，交流进度
        registry.addViewController("/myTasks").setViewName("myTasks");*/
        //测试页面
        //registry.addViewController("/saveCompany").setViewName("saveCompany");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginHandlerIntercepter()).addPathPatterns("/**")//指定所有请求时触发，检查session
                .excludePathPatterns("/toLogin","/login.html", "/", "/test", "/images/**", "/lib/**", "/document/**","/register" ,"/userLogin", "/registerUser", "/returnRegister", "/js/**", "/css/*");//默认不拦截css和JavaScript，但拦截其它静态资源,但是在js文件中里面有子文件夹是无法引入的，需要引入
        //拦截结果是自动回到登录页面而非报错
    }
}
