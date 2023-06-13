package com.ice.test.controller;


import com.ice.test.domain.ReceiverMessage;
import com.ice.test.domain.Task;
import com.ice.test.service.ApplyService;
import com.ice.test.service.CompanyService;
import com.ice.test.service.ReceiverMessageService;
import com.ice.test.service.TaskService;
import com.ice.test.vo.MyPublishTask;
import com.ice.test.vo.MyTask;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @Classname TasksController
 * @Description 任务类接口：包括任务发布、任务状态更改、任务删除等等操作
 * @Date 2023/2/27 17:16
 * @Created by FunCoder
 */
@Controller
public class TasksController {

    @Resource
    TaskService taskService;

    @Resource
    CompanyService companyService;

    @Resource
    ReceiverMessageService receiverMessageService;

    @Resource
    ApplyService applyService;

    @Value("${resourceLocations}")
    private String resourceLocations;

    /**
     * 任务具体要求上传:以图片的形式进行上传，返回图片存储路径
     *
     * @param file
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping("uploadTask")
    public Map upload(MultipartFile file, HttpServletRequest request) {

        String prefix = "";
        String dateStr = "";
        //保存上传
        OutputStream out = null;
        InputStream fileInput = null;
        try {
            if (file != null) {
                String originalName = file.getOriginalFilename();
                //获取上传文件的后缀
                prefix = originalName.substring(originalName.lastIndexOf(".") + 1);
                Date date = new Date();
                String uuid = UUID.randomUUID() + "";//随机字符串id
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
                dateStr = simpleDateFormat.format(date);//上传时间，是一个文件夹，上传的任务按照日期进行归类
                String filepath = resourceLocations + dateStr + "/" + uuid + "." + prefix;
                File files = new File(filepath);
                if (!files.getParentFile().exists()) {
                    files.getParentFile().mkdirs();
                }
                file.transferTo(files);
                Map<String, Object> map2 = new HashMap<>();
                Map<String, Object> map = new HashMap<>();
                map.put("code", 0);
                map.put("msg", "");
                map.put("data", map2);
                map2.put("src", "/taskImages/" + dateStr + "/" + uuid + "." + prefix);
                return map;
            }

        } catch (Exception e) {
        } finally {
            try {
                if (out != null) {
                    out.close();
                }
                if (fileInput != null) {
                    fileInput.close();
                }
            } catch (IOException e) {
            }
        }
        Map<String, Object> map = new HashMap<>();
        map.put("code", 1);
        map.put("msg", "");
        return map;
    }

    /**
     * 任务发布：此时需要将任务具体信息进行插入数据库的操作
     *
     * @param task
     * @return
     */
    @ResponseBody
    @PostMapping("submitTask")
    public Map submitTask(@RequestBody Task task) {
        task.setTaskStatus(0);
        task.setReceiver("无");
        task.setTelephone("无");
        task.setTaskProcess("待处理");
        //结果类
        Map<String, Object> map = new HashMap<>();
        try {
            //这里设定接收者公司账号为"空"，公司处理人电话为"无"
            //一个任务包含自己信息，处理公司信息（只要公司账号），处理人信息（只要处理人电话）
            taskService.InsertTask(task);
            map.put("code", 0);
            map.put("msg", "任务发布成功");
        } catch (Exception e) {
            e.printStackTrace();
            map.put("code", 1);
            map.put("msg", "任务名不能重复");
        }
        return map;
    }

    /**
     * 查询任务：这里要看请求是查询自己发布的任务还是其它人发布的任务
     *
     * @param publisher，之后改成HttpSession httpSession
     * @return
     */
    @ResponseBody
    @GetMapping("getTasksList")
    public Map getTasksList(@RequestParam("method") Integer method, @RequestParam("publisher") String publisher) {
        HashMap<String, Object> map = new HashMap<>();//后面new的范式不用写，也就是直接定义map需要使用范式类型声明
        List<Task> tasks = new LinkedList<>();
        if (method == 0) {//表示查询的是自己发布的任务
            tasks = taskService.selectMyPublishTasks(publisher);
        } else if (method == 1) {//表示查询的是他人发布的待接收的任务,这里进行修改，别人接收的允许再次查阅，进行论坛沟通。和上一个方法相比，1.非自己发布任务。2.所有未取消任务
            tasks = taskService.getOtherAllTasksList(publisher);
        } else {//表示查询的是自己已经接受的任务
            tasks = taskService.selectMyTasks(publisher);
        }
        //我发布的任务页面和task相比字段不同的是：除了接收者账号外还要返回接收者姓名，同时点击接收者弹出详细信息时返回的要包含公司名字
        List<MyPublishTask> myPublishTaskList = new LinkedList<>();
        //任务公告栏相比于任务不同字段包括：任务发布者及其所属公司，任务的状态转换、
        List<MyTask> myTasks = new LinkedList<>();
        for (Task task : tasks) {
            int taskStatus = task.getTaskStatus();
            String myTaskStatus = "未发布";//默认没有发布
            switch (taskStatus) {
                case 0:
                    myTaskStatus = "待接收";
                    break;
                case 1:
                    myTaskStatus = "正在受理";
                    break;
                case 2:
                    myTaskStatus = "任务成功";
                    break;
                case 3:
                    myTaskStatus = "任务失败";
                    break;
                case 4:
                    myTaskStatus = "任务取消";
                    break;
                case 5:
                    myTaskStatus = "待验收";
            }
            String receiver = task.getReceiver();//判断是否有公司接收，默认为"无",表示没有公司接收该任务
            System.out.println(receiver);//获取公司账号
            String receiverName;//处理公司的员工名称
            String receiverTelephone;//处理公司的员工电话
            String receiverCompany;//处理公司的名称
            if(receiver.equals("无")){//任务发布时，账号不是null或者"".而是无。这里表示没有公司接收
                receiver = "无";
                receiverName = "无";
                receiverCompany = "无";
                receiverTelephone = "无";
            }else{//如果该任务是被接收的，注意返回处理人的基本信息。任务被接收，则receiver不为无且电话不为null
                //根据接收者电话查询接收者所有信息
                receiverTelephone = task.getTelephone();
                ReceiverMessage receiverMessage = receiverMessageService.getReceiverByTelephone(task.getTelephone());
                //查询接收者所属公司账号获取公司信息
                receiverCompany = companyService.getCnameByAccount(receiverMessage.getAccount());
                receiverName = receiverMessage.getUsername();
            }
            MyPublishTask myPublishTask = new MyPublishTask(task.getTitle(), task.getTaskType(), task.getDescription(), task.getImages(), task.getPublishTime(), task.getEndTime(), receiver, receiverName ,myTaskStatus, task.getPrice(),task.getEmail(),receiverCompany,receiverTelephone,task.getTaskProcess());
            myPublishTaskList.add(myPublishTask);
            //根据发布者账号查询发布者所属公司
            String company = companyService.getCnameByAccount(task.getPublisher());
            MyTask myTask = new MyTask(task.getTitle(), task.getTaskType(), task.getDescription(), task.getImages(), task.getPublishTime(), task.getEndTime(), task.getPublisher(), company ,myTaskStatus, task.getPrice(),task.getEmail(),task.getTaskProcess());
            myTasks.add(myTask);
        }
        map.put("code", 0);
        map.put("msg", "请求成功");
        //查阅自己发布需要相比于查阅别人发布的，多了一个接收者信息。这样可以起到保密处理人信息的作用
        if (method == 0) {
            map.put("count", myPublishTaskList.size());
            map.put("data", myPublishTaskList);
        } else {//任务公告栏和任务接受栏都是一个数据
            map.put("count", myTasks.size());
            map.put("data", myTasks);
        }
        return map;
    }


    /**
     * 任务取消：这里不是从数据库删除数据，而是更改状态即可，这样可以看过期任务
     * 输入参数只需要任务名即可，不需要发布者信息
     *
     * @param title
     * @return
     */
    @ResponseBody
    @GetMapping("deleteTask")
    public Map deleteTask(@RequestParam("title") String title) {
        HashMap<String, Object> map = new HashMap<>();//后面new的范式不用写，也就是直接定义map需要使用范式类型声明
        try {
            taskService.deleteTask(title);
            map.put("code", 0);
            map.put("msg", "任务成功取消");
        } catch (Exception e) {
            e.printStackTrace();
            map.put("code", 1);
            map.put("msg", "任务取消失败");
        }
        return map;
    }

    /**
     * 修改任务状态：这里主要是正在处理的任务更改为成功或者失败
     *
     * @param title
     * @param taskStatus
     * @return
     */
    @ResponseBody
    @RequestMapping("updateTaskStatus")
    public Map updateTaskStatus(@RequestParam("title") String title, @RequestParam("taskStatus") Integer taskStatus) {
        HashMap<String, Object> map = new HashMap<>();
        try {
            System.out.println("更新信息状态为1");
            taskService.updateTaskStatus(title, taskStatus);
            System.out.println("更新信息状态为1");
            map.put("code", 0);
            map.put("msg", "任务处理成功");
        } catch (Exception e) {
            e.printStackTrace();
            map.put("code", 1);
            map.put("msg", "任务处理失败");
        }
        return map;
    }


    /**
     * 任务重启：相比于更改任务状态还要删除处理人账号，使得它完全变为一个新的任务
     * 删掉任务的处理公司、处理人、以及任务的申请记录
     * @param title
     * @param taskStatus
     * @return
     */
    @ResponseBody
    @RequestMapping("reStartTasks")
    public Map reStartTasks(@RequestParam("title") String title, @RequestParam("taskStatus") Integer taskStatus){
        HashMap<String, Object> map = new HashMap<>();
        try {
            taskService.updateTaskStatus(title, taskStatus);
            System.out.println(taskService.getTaskByTitle(title));
            taskService.updateTaskReceiver(title,"无");//相当于让”无“公司来接收任务，”无“处理人接收
            taskService.updateTaskTelephone(title,"无");
            applyService.deleteApply(title);
            map.put("code", 0);
            map.put("msg", "任务处理成功");
        } catch (Exception e) {
            e.printStackTrace();
            map.put("code", 1);
            map.put("msg", "任务处理失败");
        }
        return map;
    }

    /**
     * 指派任务：这里直接对电话、账号等都进行插入，然后还要修改任务状态
     * @param task
     * @return
     */
    @ResponseBody
    @PostMapping("assginTask")
    public Map assginTask(@RequestBody Task task){
        task.setTaskStatus(1);//指派就是正在处理
        task.setTaskProcess("待处理");
        System.out.println(task);
        Map<String, Object> map = new HashMap<>();
        try {
            //这里设定接收者公司账号为"空"，公司处理人电话为"无"
            //一个任务包含自己信息，处理公司信息（只要公司账号），处理人信息（只要处理人电话）
            taskService.InsertTask(task);
            map.put("code", 0);
            map.put("msg", "任务发布成功");
        } catch (Exception e) {
            e.printStackTrace();
            map.put("code", 1);
            map.put("msg", "任务名不能重复");
        }
        return map;
    }

    @ResponseBody
    @GetMapping("updateTaskProcess")
    public Map updateTaskProcess(@RequestParam("title") String title,@RequestParam("taskProcess") String taskProcess){
        System.out.println(taskProcess);
        //进行任务进程状态更新
        Map<String, Object> map = new HashMap<>();
        try {
            //这里设定接收者公司账号为"空"，公司处理人电话为"无"
            //一个任务包含自己信息，处理公司信息（只要公司账号），处理人信息（只要处理人电话）
            taskService.updateTaskProcess(title,taskProcess);
            map.put("code", 0);
            map.put("msg", "更新任务进程成功");
        } catch (Exception e) {
            e.printStackTrace();
            map.put("code", 1);
            map.put("msg", "更新任务进程失败");
        }
        return map;
    }
}
