package com.ice.test.controller;

import com.ice.test.domain.Apply;
import com.ice.test.domain.Company;
import com.ice.test.domain.ReceiverMessage;
import com.ice.test.domain.Task;
import com.ice.test.service.ApplyService;
import com.ice.test.service.CompanyService;
import com.ice.test.service.ReceiverMessageService;
import com.ice.test.service.TaskService;
import com.ice.test.vo.ApplyTask;
import com.ice.test.vo.MyApply;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/apply")
@RequiredArgsConstructor
public class ApplyController {

    private final ApplyService applyService;

    private final TaskService taskService;

    private final CompanyService companyService;

    private final ReceiverMessageService receiverMessageService;

    @PostMapping("submitApply")
    public Map submitApply(@RequestBody Apply apply) {
        applyService.saveApply(apply);
        HashMap map = new HashMap();
        map.put("code", 0);
        map.put("msg", "已发送申请");
        return map;
    }

    @GetMapping("getApplyListByPublisher")
    public Map getApplyListByPublisher(@RequestParam("username") String username) {
        HashMap map = new HashMap();
        List<ApplyTask> list = new LinkedList<>();//返回结果数据
        List<Apply> applyList = applyService.getApplyListByPublisher(username);//我接到的所有申请表单
        for (Apply apply : applyList) {
            //通过title判断该申请的任务是否已经被其他公司申请了.其实也可以直接看任务的状态是否为1
            Task task = taskService.getTaskByTitle(apply.getTitle());
            if (task.getTaskStatus() == 0) {//任务还是待处理，也就是没有申请通过同意
                //表示这个申请是等待处理的,显示到前端
                /*List<Apply> applyList1 = applyService.getApplyListByTitle(apply.getTitle());*/
                String company = companyService.getCnameByAccount(apply.getAccount());
                ReceiverMessage receiverMessage = receiverMessageService.getReceiverByTelephone(apply.getTelephone());
                ApplyTask applyTask = new ApplyTask(apply.getId(), task.getTitle(), task.getDescription(), task.getImages(), task.getPublishTime(), apply.getAccount(), company, receiverMessage.getTelephone(), receiverMessage.getUsername(), receiverMessage.getEmail(), receiverMessage.getWeichat());
                list.add(applyTask);
            }
        }
        map.put("code", 0);
        map.put("msg", "查询成功");
        map.put("data", list);
        return map;
    }

    /**
     * 同意申请，此时除了更新申请表之外，还要更新任务表的信息
     *
     * @param applyId
     * @param receiver
     * @param telephone
     * @param title
     * @return
     */
    @GetMapping("agreeApply")
    public Map agreeApply(@RequestParam("applyId") Integer applyId, @RequestParam("receiver") String receiver, @RequestParam("telephone") String telephone, @RequestParam("title") String title) {
        HashMap map = new HashMap();
        System.out.println("同意");
        System.out.println(receiver);
        /*
         * 第一步：更新申请表中该条申请的状态
         */
        applyService.updateApplyStatusById(applyId, "1");
        /*
         *第二部：更新任务表的信息
         * 更改任务的状态为正在处理
         * 更改任务的处理人公司，更改任务的处理人信息
         */
        taskService.updateTaskStatus(title, 1);
        taskService.updateTaskTelephone(title, telephone);
        taskService.updateTaskReceiver(title, receiver);
        map.put("code", 0);
        map.put("msg", "同意成功");
        return map;
    }

    /**
     * 查看我申请的记录及其状态
     * 首先是查询我的所有申请记录，然后进行遍历
     * 如果这个申请状态为1，则表示已经同意确认
     * 如果这个申请状态为0，则判断申请的任务是否被其他占用，没有则是待批准，有则是被拒绝
     *
     * @param username
     * @return
     */
    @GetMapping("myApplyTable")
    public Map myApplyTable(@RequestParam("username") String username) {
        HashMap map = new HashMap();
        List<Apply> applyListByAccount = applyService.getApplyListByAccount(username);//获取该公司所有的申请数据
        List data = new LinkedList();
        for (Apply apply : applyListByAccount) {
            Task task = taskService.getTaskByTitle(apply.getTitle());
            String company = companyService.getCnameByAccount(apply.getPublisher());//获得发布者公司名
            String applyStatus;
            if (apply.getApplyStatus().equals("1")) {
                //申请状态为1，也就是“已同意”
                applyStatus = "已同意";
            } else {//状态为0，要判断是拒绝了还是待审核
                if (task.getTaskStatus() == 1) {//这个任务正在被处理中
                    applyStatus = "已拒绝";
                } else {
                    applyStatus = "申请待审核";
                }
            }
            MyApply myApply = new MyApply(apply.getId(), apply.getTitle(), applyStatus, task.getDescription(), task.getImages(), company, task.getPublishTime());
            data.add(myApply);
        }
        map.put("code", 0);
        map.put("msg", "请求成功");
        map.put("data", data);
        return map;
    }
}
