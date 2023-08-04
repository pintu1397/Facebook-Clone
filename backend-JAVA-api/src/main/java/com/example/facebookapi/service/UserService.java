package com.example.facebookapi.service;
import com.example.facebookapi.entity.User;
import com.example.facebookapi.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;


    public User saveUserDetails(User user) {
        Date date=new Date();
        long time=date.getTime();
        Timestamp dateTime=new Timestamp(time);
        user.setActiveStatus(true);
        user.setJoiningDate(dateTime);
        return userRepo.save(user);
    }
    public ArrayList<User> getAllUserDetails(){
        return userRepo.findAll();
    }

    public User getUserDetails(String userId) {
        return userRepo.findAllByuserId(userId);
    }
}
