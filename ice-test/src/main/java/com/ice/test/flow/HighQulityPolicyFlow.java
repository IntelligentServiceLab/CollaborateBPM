package com.ice.test.flow;

import com.ice.core.context.IceRoam;
import com.ice.core.leaf.roam.BaseLeafRoamFlow;
import lombok.Data;

import java.util.Random;

@Data
public class HighQulityPolicyFlow extends BaseLeafRoamFlow {
    //{"score":100,"key":"cost"}
    //{"key":"policy","po":"leastCost"}
    //{"key":"qulity","qulity":"highqulity"}
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
        Object qulity1 = roam.getMulti(key);
        System.out.println(po);
        System.out.println(key);
        System.out.println(qulity1);

        if (po.equals(qulity1)) {
            return true;
        }else {
            return false;
        }

    }
}
