package com.example.facebookapi.repository;


import com.example.facebookapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.UUID;
@Repository
public interface UserRepo extends JpaRepository<User, UUID> {

     User save(User user);
     ArrayList<User> findAll();
     User findAllByuserId(String userId);

}
