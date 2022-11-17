package com.ice.test.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class SendService {

    public boolean sendAmount(Integer uid, String value) {
        //do send amount
        log.info("=======send amount uid:{}, value:{}", uid, value);
        return true;
    }

    public boolean sendPoint(Integer uid, String value) {
        //do send point
        log.info("=======send point uid:{}, value:{}", uid, value);
        return true;
    }
}
