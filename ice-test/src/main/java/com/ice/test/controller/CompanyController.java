package com.ice.test.controller;

import com.ice.test.domain.Company;
import com.ice.test.service.CompanyService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 * 公司接口
 */
@Controller
public class CompanyController {

    @Resource
    CompanyService companyService;

    /**
     * 用户注册接口
     * @param company
     * @return
     */
    @PostMapping("registerUser")
    @ResponseBody
    public Map registerUser(@RequestBody Company company){
        Map map = new HashMap();
        //执行用户注册
        try{
            companyService.registerUser(company);
            map.put("code",0);
            map.put("msg","注册成功");
        }catch (Exception e){
            e.printStackTrace();
            map.put("code",1);
            map.put("msg","账号重复");
        }
        return map;
    }


    @PostMapping("/userLogin")//检测账号密码
    public String userLogin(@RequestParam("account") String account, @RequestParam("password") String password, Model model, HttpSession httpSession) {
        System.out.println("登录验证中...");
        Company user= companyService.getUser(account, password);
        if (user == null) {
            System.out.println("验证失败");
            model.addAttribute("verification", "false");
            return "login.html";
        } else {
            System.out.println("验证成功");
            model.addAttribute("verification", "true");
            httpSession.setAttribute("account", account);
            httpSession.setAttribute("password", password);
            return "main.html";//main.html和main都可以
        }

    }
}
