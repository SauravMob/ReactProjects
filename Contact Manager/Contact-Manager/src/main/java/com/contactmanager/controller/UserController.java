package com.contactmanager.controller;

import com.contactmanager.dao.UserRepository;
import com.contactmanager.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3001/")
@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/home")
    public ResponseEntity home() {
        return ResponseEntity.ok("Home");
    }

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User user1 = userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User user1 = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (user1 != null) {
            return ResponseEntity.ok("User exists");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User does not exist");
        }
    }
}
