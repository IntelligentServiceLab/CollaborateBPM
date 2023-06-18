package com.ice.test.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 用于展示已申请任务的信息表
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApplyTask {

    private Integer id;//申请表的主键ID
    private String title;
    private String description;
    private String images;
    private String publishTime;
    private String receiver;//公司账号
    private String cname;//公司名称
    private String telephone;//处理人电话
    private String username;//处理人姓名
    private String email;//处理人邮箱
    private String weichat;//处理人微信
}
