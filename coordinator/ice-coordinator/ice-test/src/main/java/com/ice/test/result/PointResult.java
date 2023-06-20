package com.ice.test.result;

import com.ice.core.context.IceRoam;
import com.ice.core.leaf.roam.BaseLeafRoamResult;
import com.ice.test.service.SendService;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.annotation.Resource;

@Data
@EqualsAndHashCode(callSuper = true)
public class PointResult extends BaseLeafRoamResult {

    @Resource
    private SendService sendService;

    private String key;

    private String value;

    @Override
    protected boolean doRoamResult(IceRoam roam) {
        Integer uid = roam.getMulti(key);
        if (uid == null ) {
            return false;
        }
        boolean res = sendService.sendPoint(uid, value);
        roam.put("SEND_POINT", res);
        return res;
    }
}
