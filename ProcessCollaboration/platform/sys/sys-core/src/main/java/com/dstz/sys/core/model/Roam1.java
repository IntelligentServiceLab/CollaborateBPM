package com.dstz.sys.core.model;

import lombok.Data;

@Data
public class Roam1 {
    private Integer uid;
    private Integer cost;
    private Suplier suplier;
    private Integer value;
    private String policy;
    private Boolean SEND_RESULT;
}
