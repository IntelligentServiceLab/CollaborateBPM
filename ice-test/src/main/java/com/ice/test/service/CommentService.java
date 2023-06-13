package com.ice.test.service;



import com.ice.test.domain.Comment;

import java.util.LinkedList;

/**
 * @Classname CommentService
 * @Description TODO
 * @Date 2023/3/13 16:05
 * @Created by FunCoder
 */
public interface CommentService {

    /**
     * 查询一个任务的所有评论
     *
     * @return
     */
    LinkedList<Comment> getCommentByTitle(String title);

    void saveComment(Comment comment);

    void updateReplyContentByCommentText(String replyContent,String commentText);
}
