package com.contactmanager.controller;

import com.contactmanager.dao.ContactRepository;
import com.contactmanager.dao.UserRepository;
import com.contactmanager.entities.Contacts;
import com.contactmanager.entities.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3001/")
@Controller
public class UserController {

    HttpServletRequest request;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/home")
    public ResponseEntity home() {
        return ResponseEntity.ok("Home");
    }

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        user.setRole("USER");
        User user1 = userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User user1 = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (user1 != null) {
            HttpSession session = request.getSession();
            session.setAttribute("username", user.getEmail());
            return ResponseEntity.ok(user.getEmail());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User does not exist");
        }
    }

    @PostMapping("/user/add-contacts")
    public void addContact(@RequestBody Contacts contacts) {
        HttpSession session = request.getSession();
        String username = (String) session.getAttribute("username");
        System.out.println("USERNAME:" + username);
//        User user1 = this.userRepository.findByEmail(username);
//        contacts.setUser(user1);
//        this.userRepository.save(user1);
//        return ResponseEntity.ok(user1);
    }
}
