package com.example.facebookapi.repository;
import com.example.facebookapi.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.UUID;

@Repository
public interface StatusRepo extends JpaRepository<Status, UUID> {
    ArrayList<Status> findAll();
    Status save(Status status);
    void deleteById(UUID statusId);
}
