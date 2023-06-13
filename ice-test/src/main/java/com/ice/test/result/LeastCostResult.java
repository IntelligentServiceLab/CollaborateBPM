package com.ice.test.result;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ice.core.context.IceRoam;
import com.ice.core.leaf.roam.BaseLeafRoamResult;
import com.ice.test.domain.Suplier;
import com.ice.test.mapper.SuplierMapper;
import com.ice.test.service.SendService;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.Resource;
import java.util.List;

/*
* 通过字段名查找，进行排序
*
* */
@Data
@EqualsAndHashCode(callSuper = true)
public class LeastCostResult extends BaseLeafRoamResult {
    // {"key":"uid","value":5}
    @Resource
    private SendService sendService;
    @Autowired
    private SuplierMapper suplierMapper;

    private String key;//从roam中找到key（键值对中的键值）

    /*private String value;//自定义value与找到的key值进行操作或者比较，也可以自己定义需要配置的值*/

    @Override
    protected boolean doRoamResult(IceRoam roam) {
        String manager = roam.getMulti(key);
        System.out.println("manager:"+manager);
        if (manager == null ) {
            System.out.println("没有manager");
        }
        //查出价格最低的供应商信息
        QueryWrapper<Suplier> queryWrapper=new QueryWrapper<>();
        queryWrapper.eq("qulity","cheap").like("manager",manager).orderByAsc("price");
        List<Suplier> supliers = suplierMapper.selectList(queryWrapper);
        System.out.println("LeastCostResult节点返回信息："+supliers);
        if(supliers.size()>3){
            roam.put("supliers",supliers.subList(0,3));

        }else{
            roam.put("supliers",supliers);
        }
        /*boolean res = sendService.sendAmount(manager, value);*/
        roam.put("SEND_RESULT",true);
        /*roam.put("value",value);*/
        return true;
    }
}
