package com.ice.test.controller;


import com.ice.test.domain.Comment;
import com.ice.test.domain.Task;
import com.ice.test.service.CommentService;
import com.ice.test.service.TaskService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

/**
 * @Classname CommentController
 * @Description 评论回复接口
 * @Date 2023/3/13 15:50
 * @Created by FunCoder
 */
@Controller
public class CommentController {


    @Resource
    TaskService taskService;

    @Resource
    CommentService commentService;

    /**
     * 跳转到评论回复页面：加载该任务具体参数要求图片以及目前该用户已经评论的内容
     *
     * @param username
     * @param title
     * @param model
     * @return
     */
    @RequestMapping("comment")
    public String comment(@RequestParam("username") String username, @RequestParam("title") String title, Model model) {
        /*
         * 这里涉及两个业务过程的处理：
         * 首先是得到任务的具体信息，并判断访问用户是否为发布者
         * 其次是找到该用户对这一任务的所有评论进行加载
         * */
        Task task = taskService.getTaskByTitle(title);
        LinkedList<Comment> comments = commentService.getCommentByTitle(title);
        model.addAttribute("task", task);
        model.addAttribute("comment", comments);
        model.addAttribute("username", username);//本质上直接传username，再前端判断是否为发布者，因为其它地方也需要这个信息因此不推荐使用true\false
        return "comment";//跳转到comment评论回复页面
    }

    /**
     * 提交评论：可能处理者发布评论
     *
     * @return
     */
    @PostMapping("submitComment")
    @ResponseBody
    public Map submitComment(@RequestBody Comment comment) {
        System.out.println("niwed");
        System.out.println(comment);
        try {
            commentService.saveComment(comment);
        } catch (Exception e) {
            e.printStackTrace();
        }
        Map<String, Object> map = new HashMap<>();
        map.put("code", 1);
        map.put("msg", "评论发布成功");
        return map;
    }

    @GetMapping("commitReply")
    @ResponseBody
    public Map commitReply(@RequestParam("commentText") String commentText, @RequestParam("replyContent") String replyContent) {
        Map<String, Object> map = new HashMap<>();
        try {
            commentService.updateReplyContentByCommentText(replyContent,commentText);
            map.put("code", 1);
            map.put("msg", "回复成功");
        } catch (Exception e) {
            e.printStackTrace();
            map.put("code", 0);
            map.put("msg", "回复失败");
        }
        return map;
    }
}
