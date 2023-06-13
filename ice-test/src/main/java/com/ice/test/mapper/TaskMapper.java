package com.ice.test.mapper;


import com.ice.test.domain.Task;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;

/**
 * @Classname TaskMapper
 * @Description 任务发布
 * @Date 2023/3/1 15:28
 * @Created by FunCoder
 */
@Mapper
@Repository
public interface TaskMapper {

    /**
     * 发布任务：接收者输入“无”，其它信息插入tasks表中
     *
     * @param task
     */
    void InsertTask(Task task);

    /**
     * 任务查询：查询自己发布的所有任务记录。这里要删除任务取消的记录
     *
     * @param publisher
     * @return
     */
    LinkedList<Task> selectMyPublishTasks(String publisher);

    /**
     * 任务查询：查询他人发布的任务记录，方便沟通和接受
     * 任务要求：1.不是自己发布的
     * 2.任务状态是未被取消的即可
     *
     * @param publisher
     * @return
     */
    LinkedList<Task> getOtherAllTasksList(String publisher);

    /**
     * 任务查询：我接收的任务，也就是我正在处理的任务。此时需要注意任务状态
     *
     * @param username
     * @return
     */
    LinkedList<Task> selectMyTasks(String username);


    /**
     * 根据任务标题进行查询
     * @param title
     * @return
     */
    Task selectTaskByTitle(String title);

    /**
     * 任务状态更改：发布的任务被中途取消,这里是更改状态就行了，不是删除记录
     *
     * @param title
     */
    void updateTaskStatus(String title, Integer status);

    /**
     * 任务接收：接收发布的任务，更改任务状态和接收者名字
     *
     * @param title
     * @param receiver
     */
    void updateTaskReceiver(String title, String receiver);


    /**
     * 任务接收：更改电话号码
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

    /**
     * 获取当前任务进程
     */
    String getTaskProcessByTitle(String title);
}
