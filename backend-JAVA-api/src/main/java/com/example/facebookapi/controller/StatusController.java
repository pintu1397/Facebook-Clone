package com.example.facebookapi.controller;
import com.example.facebookapi.entity.Status;
import com.example.facebookapi.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/api/statusService")
public class StatusController {
    @Autowired
    private StatusService statusService;
    @PostMapping("/save")
    public ArrayList<Status> savePost(@RequestBody Status status){
        ArrayList<Status>result = statusService.saveStatus(status);
        return result;
    }
    @GetMapping("/getStatus")
    public ArrayList<Status> getAllPost(){
        ArrayList<Status>result = statusService.getAllStatus();
        return result;
    }
    @DeleteMapping("/status/{statusId}")
    public ArrayList<Status> deletePost(@PathVariable("postId") UUID statusId){
        ArrayList<Status>result = statusService.deleteStatus(statusId);
        return result;
    }
}
