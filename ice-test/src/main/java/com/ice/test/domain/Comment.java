package com.ice.test.domain;

/**
 * @Classname Comment
 * @Description 评论回复类
 * @Date 2023/3/13 16:19
 * @Created by FunCoder
 */
public class Comment {
    String title;

    String receiver;

    String commentText;

    String commentTime;

    String replyContent;

    public Comment(String title, String receiver, String commentText, String commentTime, String replyContent) {
        this.title = title;
        this.receiver = receiver;
        this.commentText = commentText;
        this.commentTime = commentTime;
        this.replyContent = replyContent;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getCommentText() {
        return commentText;
    }

    public void setCommentText(String commentText) {
        this.commentText = commentText;
    }

    public String getCommentTime() {
        return commentTime;
    }

    public void setCommentTime(String commentTime) {
        this.commentTime = commentTime;
    }

    public String getReplyContent() {
        return replyContent;
    }

    public void setReplyContent(String replyContent) {
        this.replyContent = replyContent;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "title='" + title + '\'' +
                ", receiver='" + receiver + '\'' +
                ", commentText='" + commentText + '\'' +
                ", commentTime='" + commentTime + '\'' +
                ", replyContent='" + replyContent + '\'' +
                '}';
    }
}
