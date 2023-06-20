package com.ice.test.domain;

import lombok.Data;

import java.util.List;

@Data
public class Roam1 {
    private Integer uid;
    private Integer cost;
    private List<Suplier> supliers;
    private Integer value;
    private String policy;
    private Boolean SEND_RESULT;
}
