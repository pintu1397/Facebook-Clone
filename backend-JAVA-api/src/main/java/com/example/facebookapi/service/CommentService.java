package com.example.facebookapi.service;

import com.example.facebookapi.entity.Comment;
import com.example.facebookapi.repository.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

@Service
public class CommentService {
    @Autowired
    private CommentRepo commentRepo;
    public Comment saveComment(Comment comment) {
        Date date = new Date();
        long time = date.getTime();
        Timestamp dateTime = new Timestamp(time);
        comment.setCommentId(UUID.randomUUID());
        comment.setDateTime(dateTime);
        return commentRepo.save(comment);
    }

    public ArrayList<Comment> getAllComment(UUID postId) {
        return commentRepo.findAllPostByPostId(postId);
    }
}

