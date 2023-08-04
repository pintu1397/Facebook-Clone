package com.example.facebookapi.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@ToString
public class Post {
    @Id
    private UUID postId;
    private String  userId;
    private String userName;
    private String imageUrl;
    private String description;
    private String postImageUrl;
    private int likes;
    private Timestamp dateTime;

}
