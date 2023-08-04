package com.example.facebookapi.service;
import com.example.facebookapi.entity.Status;
import com.example.facebookapi.repository.StatusRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

@Service
public class StatusService {
    @Autowired
    private StatusRepo  statusRepo;
    public ArrayList<Status> saveStatus(Status status) {
        Date date = new Date();
        long time = date.getTime();
        Timestamp dateTime = new Timestamp(time);
        status.setStatusId(UUID.randomUUID());
        status.setDateTime(dateTime);

       statusRepo.save(status);
        ArrayList<Status> result = getAllStatus();
        return result;
    }

    public ArrayList<Status> getAllStatus() {
        ArrayList<Status> result = statusRepo.findAll();
        return result;
    }

    public ArrayList<Status> deleteStatus(UUID statusId) {
        statusRepo.deleteById(statusId);
        ArrayList<Status> result = getAllStatus();
        return result;
    }
}
