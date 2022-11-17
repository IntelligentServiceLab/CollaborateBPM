package com.dstz.sys.rest.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.dstz.sys.core.dao.SuplierDao;
import com.dstz.sys.core.dao.TestDao;
import com.dstz.sys.core.model.*;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;




@RestController
@RequestMapping("test")
public class TestController {
    @Autowired
    TestDao testDao;
    @Autowired
    SuplierDao suplierDao;

    @GetMapping("/all")
    public void findAll(HttpServletRequest httpServletRequest, HttpServletResponse response) throws IOException {

        String text = httpServletRequest.getParameter("100"); // 用name
        PrintWriter out = response.getWriter();
        out.write("tes");
        System.out.println("和高管或加热和广播耳机会比污染环境而我居然0而围护结构或加热文件柜和别人局外人");
    }
    @PostMapping("/test")
    public int testFind(@RequestParam String policy){
        //1.构造一个ICE可以解析的数据
        System.out.println(policy);
        Massage massage = new Massage();
        Roam roam = new Roam();
        roam.setUid(3L);
        roam.setCost(200);
        roam.setPolicy(policy);
        massage.setScene("ship");
        massage.setRoam(roam);
//将对象转成String再转成JSON
        String message = JSON.toJSONString(massage);
        JSONObject msg = JSON.parseObject(message);
        System.out.println(msg);
        //2.调用Ice接口获得数据
        String url="http://localhost:8082/ice-test/test";
        RestTemplate restTemplate = new RestTemplate();
        String s = restTemplate.postForObject(url,msg,String.class);
        s=s.substring(1,s.length()-1);
        System.out.println(s);
        IceRoam1 iceRoam1 = JSON.parseObject(s, IceRoam1.class);
        //3.建立接受数据的Moudle,处理成Suplier。insertAll可以接受的数据类型
        Suplier suplier1 = iceRoam1.getPack().getRoam().getSuplier();
        //4.调用inserAll存入数据
        int i = suplierDao.insertALL(suplier1);
        //5.返回结果
        System.out.println(i);
        return i ;
    }
    @GetMapping("/test1")
    public List<Test> find(){
        List<Test> test = testDao.findTest();
        return test;
    }
    @GetMapping("/shipd")
    public List<Shipb> findbd(){
        List<Shipb> bd = testDao.findshipb();
        return bd;
    }
}
