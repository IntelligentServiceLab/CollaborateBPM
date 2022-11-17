package com.dstz.sys.core.model;

import lombok.Data;

@Data
public class Pack {
    private Integer confId;
    private Integer debug;
    private Integer iceId;
    private Integer priority;
    private Long requestTime;
    private Roam1 roam;
}
