package com.example.facebookapi.repository;

import com.example.facebookapi.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.UUID;

@Repository
public interface CommentRepo extends JpaRepository<Comment, UUID> {
    Comment save(Comment comment);
    ArrayList<Comment> findAllPostByPostId(UUID postId);
}
