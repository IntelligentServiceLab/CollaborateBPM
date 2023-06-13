package com.ice.test.controller;

import com.alibaba.fastjson.JSON;
import com.ice.client.IceClient;
import com.ice.core.context.IcePack;
import com.ice.core.context.IceRoam;
import com.ice.test.domain.IceRoam1;
import com.ice.test.domain.Suplier;
import com.ice.test.service.CompanyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 * @author zjn
 */
@Slf4j
@RestController
@RequestMapping("/ice-test")
@RequiredArgsConstructor
public class TestController {

    private final CompanyService companyService;

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public Map test(@RequestParam("policy") String policy , @RequestParam("area") String area , @RequestParam("product") String product) {
        HashMap map = new HashMap<String,Object>();
        map.put("scene",area);
        HashMap map2 = new HashMap();
        map2.put("policy",policy);
        map2.put("product",product);
        map.put("roam",map2);
        System.out.println(map);
        HashMap hashMap = new HashMap();
        IcePack pack = JSON.parseObject(JSON.toJSONString(map), IcePack.class);
        String pack1=JSON.toJSONString(IceClient.processCxt(pack));
        String pack2=pack1.substring(1,pack1.length()-1);
        IceRoam1 iceRoam1 = JSON.parseObject(pack2, IceRoam1.class);
        List<Suplier> supliers = iceRoam1.getPack().getRoam().getSupliers();
        System.out.println(supliers);
        hashMap.put("code",0);
        hashMap.put("msg","成功");
        hashMap.put("count",supliers.size());
        hashMap.put("data",supliers);
        return hashMap;
    }

    @RequestMapping(value = "/recharge", method = RequestMethod.GET)
    public String recharge(@RequestParam Integer cost, @RequestParam Integer uid) {
        IcePack pack = new IcePack();
        pack.setScene("recharge");
        IceRoam roam = new IceRoam();
        roam.put("cost", cost);
        roam.put("uid", uid);
        pack.setRoam(roam);
        IceClient.process(pack);
        return JSON.toJSONString(roam.get("result"));
    }

    @RequestMapping(value = "/consume", method = RequestMethod.GET)
    public String consume(@RequestParam Integer cost, @RequestParam Integer uid) {
        IcePack pack = new IcePack();
        pack.setScene("consume");
        IceRoam roam = new IceRoam();
        roam.put("cost", cost);
        roam.put("uid", uid);
        pack.setRoam(roam);
        IceClient.process(pack);
        return JSON.toJSONString(roam.get("result"));
    }
}
