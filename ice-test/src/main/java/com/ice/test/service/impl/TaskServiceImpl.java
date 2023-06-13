package com.ice.test.service.impl;


import com.ice.test.domain.Task;
import com.ice.test.mapper.TaskMapper;
import com.ice.test.service.TaskService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.LinkedList;
import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {
    @Resource
    TaskMapper taskMapper;

    @Override
    public void InsertTask(Task task) {
        taskMapper.InsertTask(task);
    }

    @Override
    public List<Task> selectMyPublishTasks(String publisher) {
        return taskMapper.selectMyPublishTasks(publisher);
    }

    @Override
    public LinkedList<Task> getOtherAllTasksList(String publisher) {
        return taskMapper.getOtherAllTasksList(publisher);
    }

    @Override
    public LinkedList<Task> selectMyTasks(String username) {
        return taskMapper.selectMyTasks(username);
    }

    @Override
    public Task getTaskByTitle(String title) {
        return taskMapper.selectTaskByTitle(title);
    }

    @Override
    public void deleteTask(String title) {
        taskMapper.updateTaskStatus(title,4);//更改任务状态为4，此时即任务已取消
    }


    @Override
    public void updateTaskReceiver(String title, String receiver) {
        taskMapper.updateTaskReceiver(title,receiver);
    }

    @Override
    public void updateTaskStatus(String title, Integer taskStatus) {
        taskMapper.updateTaskStatus(title,taskStatus);
    }

    @Override
    public void updateTaskTelephone(String title, String telephone) {
        taskMapper.updateTaskTelephone(title,telephone);
    }

    @Override
    public int updateTaskProcess(String title, String taskProcess) {
        String oldtTaskProcess = taskMapper.getTaskProcessByTitle(title);
        return taskMapper.updateTaskProcess(title,oldtTaskProcess+"->"+taskProcess);
    }


}
