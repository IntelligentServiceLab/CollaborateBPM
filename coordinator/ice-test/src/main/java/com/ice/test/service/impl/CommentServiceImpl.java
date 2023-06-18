package com.ice.test.service.impl;


import com.ice.test.domain.Comment;
import com.ice.test.mapper.CommentMapper;
import com.ice.test.service.CommentService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.LinkedList;

/**
 * @Classname CommentServiceImpl
 * @Description 评论回复业务
 * @Date 2023/3/13 16:06
 * @Created by FunCoder
 */
@Service
public class CommentServiceImpl implements CommentService {

    @Resource
    CommentMapper commentMapper;

    @Override
    public LinkedList<Comment> getCommentByTitle(String title) {
        return commentMapper.selectCommentsByTitle(title);
    }

    @Override
    public void saveComment(Comment comment) {
        commentMapper.insertComment(comment);
    }

    @Override
    public void updateReplyContentByCommentText(String replyContent, String commentText) {
        commentMapper.updateReplyContentByCommentText(replyContent,commentText);
    }

}
