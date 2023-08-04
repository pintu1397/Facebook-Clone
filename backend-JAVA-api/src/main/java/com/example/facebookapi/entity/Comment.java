package com.example.facebookapi.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Getter
@Setter
@RequiredArgsConstructor
@ToString
public class Comment {
    @Id
    private UUID commentId;
    private UUID postId;
    private UUID userId;
    private String comment;
    private Timestamp dateTime;
}
