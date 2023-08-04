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
public class User {
    @Id
    private String userId;
    private String userName;
    private String userImage;
    private boolean activeStatus;
    private Timestamp joiningDate;
    private String password;
}
