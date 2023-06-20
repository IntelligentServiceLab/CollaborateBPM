package com.ice.test.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Classname MyTask
 * @Description TODO
 * @Date 2023/3/9 11:09
 * @Created by FunCoder
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyTask {

    //任务名称
    private String title;
    //任务类型:困难、普通、简单
    private String taskType;
    //任务具体描述
    private String description;
    //任务图片地址
    private String images;
    //发布时间
    private String publishTime;

    //任务截止时间
    private String endTime;
    //任务发布者账号
    private String publisher;
    //任务发布者所属公司
    private String company;

    private String taskStatus;

    private String price;

    private String email;

    private String taskProcess;


}
