package com.example.facebookapi.controller;

import com.example.facebookapi.entity.Comment;
import com.example.facebookapi.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/commentService")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @PostMapping("/save")
    public Comment saveComment(@RequestBody Comment comment){
        return commentService.saveComment(comment);

    }
    @GetMapping("/getComment/{postId}")
    public ArrayList<Comment> getAllComment(@PathVariable("postId") UUID postId){
        ArrayList<Comment>result = commentService.getAllComment(postId);
        return result;
    }
//    @DeleteMapping("/delete/{commentId}")
//    public ArrayList<Comment> deleteComment(@PathVariable("commentId")UUID commentId){
//        ArrayList<Comment>result = commentService.deleteComment(commentId);
//        return result;
//    }

}
