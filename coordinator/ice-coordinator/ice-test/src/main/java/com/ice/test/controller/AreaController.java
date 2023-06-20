package com.ice.test.controller;

import com.ice.test.service.AreaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class AreaController {

    @Resource
    AreaService areaService;

    @GetMapping("selectAreas/{area}")
    public Map selectAreas(@PathVariable("area") String area){
        System.out.println(area);
        List list = areaService.getAreaPolicyByArea(area);
        Map map = new HashMap<>();
        map.put("code",200);
        map.put("msg","查询成功");
        map.put("data",list);
        return map;
    }
}
