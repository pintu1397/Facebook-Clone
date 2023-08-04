package com.example.facebookapi.service;
import com.example.facebookapi.entity.Post;
import com.example.facebookapi.repository.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

@Service
public class PostService {
    @Autowired
    private PostRepo postRepo;
    public ArrayList<Post>savePost(Post postData){
        Date date = new Date();
        long time = date.getTime();
        Timestamp dateTime = new Timestamp(time);
        postData.setPostId(UUID.randomUUID());
        postData.setLikes(0);
        postData.setDateTime(dateTime);

        postRepo.save(postData);
        ArrayList<Post> result = getAllPost();
        return result;
    }
    public ArrayList<Post>getAllPost(){
        ArrayList<Post> result = postRepo.findAll();
        return result;
    }
    public ArrayList<Post>deletePost(UUID postId){
        postRepo.deleteById(postId);
        ArrayList<Post> result = getAllPost();
        return result;
    }
}
