package com.ice.test.controller;

import com.ice.test.domain.ReceiverMessage;
import com.ice.test.service.CompanyService;
import com.ice.test.service.ReceiverMessageService;
import com.ice.test.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * @Classname ReceiverController
 * @Description 接收者接口：用于接收者信息存储等
 * @Date 2023/4/18 10:39
 * @Created by FunCoder
 */
@Controller
public class ReceiverController {

    @Resource
    ReceiverMessageService receiverMessageService;

    @Resource
    CompanyService companyService;

    @Resource
    TaskService taskService;

    /**
     * 根据员工的电话获取员工基本信息
     * @param receiverTelephone
     * @return
     */
    @GetMapping("getReceiver")
    @ResponseBody
    public Map getReceiver(@RequestParam("receiverTelephone") String receiverTelephone){
        Map map = new HashMap();
        try {
            ReceiverMessage receiverMessage = receiverMessageService.getReceiverByTelephone(receiverTelephone);
            String company = companyService.getCnameByAccount(receiverMessage.getAccount());//根据员工信息中所属公司账号获取公司名称
            map.put("code",200);
            map.put("msg","请求成功");
            map.put("data",receiverMessage);
            map.put("company",company);
        }catch (Exception e){
            e.printStackTrace();
            map.put("code",400);
            map.put("msg","请求失败");
        }
        return  map;
    }

    /**
     * 这里要判断处理人电话是否已经存在、存在是否修改、不存在时插入，存在且没变不管
     * 我们的想法是，只要存在，无论是否修改都删除原有信息再插入
     * 这里还要对任务进行一些插入修改操作，增加员工处理人、电话
     * @param receiverMessage
     * @return
     */
    @PostMapping("submitReceiverMessage")
    @ResponseBody
    public Map submitReceiverMessage(@RequestBody ReceiverMessage receiverMessage,@RequestParam("title") String title){
        System.out.println(receiverMessage);
        String telephone = receiverMessage.getTelephone();
        ReceiverMessage receiverByTelephone = receiverMessageService.getReceiverByTelephone(telephone);
        if(receiverByTelephone==null){//该员工第一次接收任务，直接插入数据
            System.out.println("第一次数据提交");
            receiverMessageService.insertReceiverMessage(receiverMessage);
        }else{
            System.out.println("非第一次提交，对原有数据不要进行删除直接插入操作");
            receiverMessageService.deleteReceiverMessageByTelephone(telephone);//避免主键重复
            receiverMessageService.insertReceiverMessage(receiverMessage);
        }
        //对任务插入处理人电话即可
        /*taskService.updateTaskTelephone(title,telephone);*/
        Map map = new HashMap();
        map.put("code",0);
        map.put("msg","提交完成");
        return map;

    }
}
