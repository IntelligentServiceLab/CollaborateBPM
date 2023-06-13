package com.ice.test.controller;

import com.ice.test.domain.ReceiverMessage;
import com.ice.test.domain.Suplier;
import com.ice.test.service.CompanyService;
import com.ice.test.service.ReceiverMessageService;
import com.ice.test.service.SuplierService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * @Classname Company
 * @Description TODO
 * @Date 2023/4/9 15:27
 * @Created by FunCoder
 */
@Controller
public class InfoController {

    @Resource
    SuplierService suplierService;

    @Resource
    ReceiverMessageService receiverMessageService;

    @Resource
    CompanyService companyService;

    @PostMapping("/registerCompany")//提交注册信息，进行注册。提交处理人信息
    @ResponseBody
    public Map registerUser(@RequestBody Suplier suplier) {
        System.out.println(suplier.toString());
        String cname = companyService.getCnameByAccount(suplier.getName());
        suplier.setCname(cname);
        ReceiverMessage receiverMessage = new ReceiverMessage(suplier.getManager(),suplier.getName(),suplier.getEmail(),suplier.getTelephone(),suplier.getWeichat());
        suplierService.insertSuplier(suplier);//插入公司名称，存入基本信息
        receiverMessageService.insertReceiverMessage(receiverMessage);//注册处理人信息
        Map map = new HashMap();
        map.put("code",0);
        return map;
    }
}
