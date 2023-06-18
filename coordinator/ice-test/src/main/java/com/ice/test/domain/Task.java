package com.ice.test.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Classname Task
 * @Description 任务表的实体
 * @Date 2023/3/1 15:02
 * @Created by FunCoder
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {
    //任务名称
    private String title;
    //任务类型:特殊、常规
    private String taskType;
    //任务备注信息
    private String description;
    //任务图片地址
    private String images;
    //发布时间
    private String publishTime;
    //任务预估截止时间
    private String endTime;
    //任务预期开销
    private String price;
    //发布者姓名
    private String publisher;
    //接收者姓名
    private String receiver;
    //任务所处状态：0表示任务待接收，1表示任务正在处理，2表示任务处理成功，3表示任务处理失败，4表示任务取消，5表示任务待验收
    private Integer taskStatus;
    //处理人邮箱
    private String email;
    //处理人电话
    private String telephone;

    private String taskProcess;

}
