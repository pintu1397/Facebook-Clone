package com.example.facebookapi.controller;
import com.example.facebookapi.entity.User;
import com.example.facebookapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;
@CrossOrigin
@RestController
@RequestMapping("/api/userService")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public User saveUserDetails(@RequestBody User user) {
        return userService.saveUserDetails(user);
    }
    @GetMapping("/getUserDetails")
    public ArrayList<User> getUserDetails(){
        return userService.getAllUserDetails();
    }
    @GetMapping("/getAllUsers/{userId}")
    public User getUserDetails(@PathVariable("userId") String userId){
        return userService.getUserDetails(userId);
    }



}
