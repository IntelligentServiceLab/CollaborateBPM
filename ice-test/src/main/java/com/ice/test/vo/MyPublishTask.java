package com.ice.test.vo;

import com.ice.test.domain.ReceiverMessage;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Classname MyTasks
 * @Description 自己发布的任务表格，这里显示的数据和数据库的task不完全相同，作为前后端交互的类
 * 相比与task类的区别：
 * 1.不需要接收者名字，进入聊天室时再查询
 * 3.不需要发布者名字
 * 2.任务所处状态必须是汉字
 * @Date 2023/3/4 16:11
 * @Created by FunCoder
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyPublishTask {

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
    //任务接受者所属公司账号
    private String receiver;
    private String receiverName;//任务接收者名称
    //任务所处状态：0表示任务待接收，1表示任务正在处理，2表示任务处理成功，3表示任务处理失败，4表示任务取消
    private String taskStatus;
    //任务花费
    private String price;
    //委托者邮箱
    private String email;
    //接收者所属公司
    private String company;
    //接收者电话
    private String receiverTelephone;
    private String taskProcess;


}
