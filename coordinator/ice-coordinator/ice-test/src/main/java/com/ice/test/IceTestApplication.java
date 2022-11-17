package com.ice.test;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author zjn
 */
@SpringBootApplication
@MapperScan("com.ice.test.mapper")
public class IceTestApplication {
    public static void main(String... args) {
        SpringApplication.run(IceTestApplication.class, args);
    }
}
