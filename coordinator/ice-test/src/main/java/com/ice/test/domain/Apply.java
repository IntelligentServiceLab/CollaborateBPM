package com.ice.test.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 申请表
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Apply {

    private Integer id;//自增主键
    private String title;//任务ID
    private String account;//公司ID
    private String telephone;//处理人电话，处理人ID
    private String applyStatus;//申请状态
    private String publisher;//发布者账号

}
