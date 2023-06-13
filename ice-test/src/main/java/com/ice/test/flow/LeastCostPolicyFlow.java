package com.ice.test.flow;

import com.ice.core.context.IceRoam;
import com.ice.core.leaf.roam.BaseLeafRoamFlow;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Random;

@Data
@EqualsAndHashCode()
public class LeastCostPolicyFlow extends BaseLeafRoamFlow {
    //{"score":100,"key":"cost"}
    //{"key":"policy","po":"leastCost"}
    // {"key":"policy","demand":"leastCost"}备选项
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

        if (po.equals(policy1)) {
            System.out.println("LeastCostPolicyFlow节点返回true");
            return true;
        }else {
            return false;
        }

    }
}
