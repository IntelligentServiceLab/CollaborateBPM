package com.ice.test.flow;

import com.ice.core.context.IceRoam;
import com.ice.core.leaf.roam.BaseLeafRoamFlow;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Random;
import com.ice.core.context.IceRoam;
import com.ice.core.leaf.roam.BaseLeafRoamFlow;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Random;
import com.ice.core.context.IceRoam;
import com.ice.core.leaf.roam.BaseLeafRoamFlow;
import lombok.Data;
import lombok.EqualsAndHashCode;
import java.util.Random;

@Data
@EqualsAndHashCode()
public class cheap extends BaseLeafRoamFlow {
    //{"score":100,"key":"cost"}
    //{"key":"policy","po":"cheap"}
    private String po;
    private String key;

    /*
     * 叶子节点流程处理
     *
     * @param roam 传递roam
     */
    @Override
    protected boolean doRoamFlow(IceRoam roam) {
        try {
            Thread.sleep(new Random().nextInt(1000));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Object policy1 = roam.getMulti(key);
        System.out.println(po);
        System.out.println(key);
        System.out.println(policy1);

        if (po.equals(policy1)) {
            System.out.println("返回true");
            return true;

        }else {
            return false;
        }

    }
}
