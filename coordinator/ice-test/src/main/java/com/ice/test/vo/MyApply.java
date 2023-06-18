package com.ice.test.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyApply {

    private Integer id;//申请表的ID
    private String title;
    private String applyStatus;
    private String description;
    private String images;
    private String company;
    private String publishTime;
}
