package com.ice.test.controller;

import com.alibaba.fastjson.JSON;
import com.ice.client.IceClient;
import com.ice.core.context.IcePack;
import com.ice.core.context.IceRoam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author zjn
 */
@Slf4j
@RestController
@RequestMapping("/ice-test")
public class TestController {

    @RequestMapping(value = "/test", method = RequestMethod.POST)
    public String test(@RequestBody Map<String, Object> map) {
        IcePack pack = JSON.parseObject(JSON.toJSONString(map), IcePack.class);
        return JSON.toJSONString(IceClient.processCxt(pack));
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
