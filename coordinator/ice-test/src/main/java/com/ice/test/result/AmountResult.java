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
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;


@Data
@EqualsAndHashCode(callSuper = true)
public class AmountResult extends BaseLeafRoamResult {
    // {"key":"uid","value":5}
    @Resource
    private SendService sendService;
    @Autowired
    private SuplierMapper suplierMapper;

    private String key;

    private String value;

    @Override
    protected boolean doRoamResult(IceRoam roam) {
        String product = roam.getMulti(key);
        Integer uid;
        if (product == null ) {
            uid=null;
        }else {
            uid=1;
        }
        //查出价格最低的供应商信息
        QueryWrapper<Suplier> queryWrapper=new QueryWrapper<>();
        queryWrapper.like("product",product).orderByAsc("price");
        System.out.println("调用此函数");
        List<Suplier> supliers = suplierMapper.selectList(queryWrapper);
        if(supliers.size()>3){
            roam.put("supliers",supliers.subList(0,3));
        }else{
            roam.put("supliers",supliers);
        }
        boolean res = sendService.sendAmount(uid, value);
        roam.put("SEND_RESULT", res);
        roam.put("value",value);
        return res;
    }
}
