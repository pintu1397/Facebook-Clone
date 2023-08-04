package com.example.facebookapi.controller;

import com.example.facebookapi.entity.Post;
import com.example.facebookapi.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/postService")
public class PostController {
    @GetMapping("/home")
    public String home(){
        return "welcome";
    }

    @Autowired
    private PostService postService;
    @PostMapping("/save")
    public ArrayList<Post> savePost(@RequestBody Post body){
         ArrayList<Post>result = postService.savePost(body);
        return result;
    }
    @GetMapping("/getPost")
    public ArrayList<Post> getAllPost(){
        ArrayList<Post>result = postService.getAllPost();
        return result;
    }
    @DeleteMapping("/delete/{postId}")
    public ArrayList<Post> deletePost(@PathVariable("postId")UUID postId){
        ArrayList<Post>result = postService.deletePost(postId);
        return result;
    }
}
