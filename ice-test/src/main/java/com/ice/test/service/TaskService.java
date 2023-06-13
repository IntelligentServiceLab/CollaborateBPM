package com.ice.test.service;



import com.ice.test.domain.Task;

import java.util.LinkedList;
import java.util.List;

/**
 * @Classname TaskService
 * @Description 任务服务类
 * @Date 2023/3/1 16:15
 * @Created by FunCoder
 */
public interface TaskService {

    /**
     * 任务发布：除了接收任务者姓名，其它信息插入
     *
     * @param task
     */
    void InsertTask(Task task);

    /**
     * 任务查询:查询自己发布的所有任务
     *
     * @param publisher
     * @return
     */
    List<Task> selectMyPublishTasks(String publisher);

    /**
     * 任务查询:查询他人发布的任务记录，方便沟通和接受
     *
     * @param publisher
     * @return
     */
    LinkedList<Task> getOtherAllTasksList(String publisher);

    /**
     * 任务查询:查询自己接收的正在处理的任务
     *
     * @param username
     * @return
     */
    LinkedList<Task> selectMyTasks(String username);

    /**
     * 任务查询根据任务内容直接得到该任务所有信息
     * @param title
     * @return
     */
    Task getTaskByTitle(String title);


    /**
     * 任务取消
     *
     * @param title
     */
    void deleteTask(String title);


    /**
     * 更改任务的接收公司信息
     * @param title
     * @param receiver
     */
    void updateTaskReceiver(String title,String receiver);

    /**
     * 更改任务状态：这里主要是任务处理人更改任务结果成功或者失败
     *
     * @param title
     * @param taskStatus
     */
    void updateTaskStatus(String title, Integer taskStatus);

    /**
     * 更改处理人电话：根据任务ID和处理人电话进行更改
     * @param title
     * @param telephone
     */
    void updateTaskTelephone(String title,String telephone);

    /**
     * 更改任务当前进程
     * @param title
     * @param taskProcess
     */
    int updateTaskProcess(String title,String taskProcess);

}
