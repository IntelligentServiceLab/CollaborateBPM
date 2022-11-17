package com.dstz.sys.rest;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.dstz.sys.core.dao.SuplierDao;
import com.dstz.sys.core.model.IceRoam1;
import com.dstz.sys.core.model.Massage;
import com.dstz.sys.core.model.Roam;
import com.dstz.sys.core.model.Suplier;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.client.RestTemplate;

@RunWith(SpringJUnit4ClassRunner.class)
public class Test {
   /* @Autowired
    SuplierDao suplierDao;
    @Autowired
    RestTemplate restTemplate;
    @org.junit.Test
    public void insert(){
        //1.构造一个ICE可以解析的数据
        Massage massage = new Massage();
        Roam roam = new Roam();
        roam.setUid(3L);
        roam.setCost(200);
        roam.setPolicy("leastCost");
        massage.setScene("ship");
        massage.setRoam(roam);
//将对象转成String再转成JSON
        String message = JSON.toJSONString(massage);
        JSONObject msg = JSON.parseObject(message);
        System.out.println(msg);
        //2.调用Ice接口获得数据
        String url="http://localhost:8082/ice-test/test";
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

    }*/
}
