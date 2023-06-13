package com.ice.test.mapper;


import com.ice.test.domain.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;

/**
 * @Classname CommentMapper
 * @Description 评论回复
 * @Date 2023/3/13 16:14
 * @Created by FunCoder
 */
@Mapper
@Repository
public interface CommentMapper {

    LinkedList<Comment> selectCommentsByTitle(String title);

    void insertComment(Comment comment);

    //没有设置评论主键，因此比较复杂的比较
    void updateReplyContentByCommentText(String replyContent,String commentText);
}
