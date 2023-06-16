package com.contactmanager.controller;

import com.contactmanager.dao.ContactRepository;
import com.contactmanager.dao.UserRepository;
import com.contactmanager.entities.Contacts;
import com.contactmanager.entities.User;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("http://localhost:3001/")
@Controller
public class UserController {

    @Autowired
    private HttpSession session;

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
    public ResponseEntity<String> loginUser(@RequestBody User user, HttpServletRequest request) {
        User user1 = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (user1 != null) {
            this.session = request.getSession();
            this.session.setAttribute("username", user.getEmail());
            return ResponseEntity.ok(user.getEmail());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User does not exist");
        }
    }

    @PostMapping("/user/add-contacts")
    public ResponseEntity<String> addContact(@RequestBody Contacts contacts) {
        String username = (String) this.session.getAttribute("username");
        User user1 = this.userRepository.findByEmail(username);
        if (user1 != null) {
            contacts.setUser(user1);
            user1.getContacts().add(contacts);
            this.userRepository.save(user1);
            return ResponseEntity.ok(contacts.getName());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User does not exist");
        }
    }

    @PutMapping("/user/edit-contact/{id}")
    public ResponseEntity<Contacts> editContact(@PathVariable("id") Integer id, @RequestBody Contacts contacts) {
        Contacts contacts1 = this.contactRepository.findContactsById(id);
        contacts1.setName(contacts.getName());
        contacts1.setEmail(contacts.getEmail());
        contacts1.setPhone(contacts.getPhone());
        contacts1.setWork(contacts.getWork());
        contacts1.setAbout(contacts.getAbout());
        String username = (String) this.session.getAttribute("username");
        User user1 = this.userRepository.findByEmail(username);
        contacts1.setUser(user1);
        this.contactRepository.save(contacts1);
        return ResponseEntity.ok(contacts1);
    }

    @GetMapping("/user/get-contact/{id}")
    public ResponseEntity<Contacts> getContact(@PathVariable("id") Integer id) {
        Contacts contacts1 = this.contactRepository.findContactsById(id);
        return ResponseEntity.ok(contacts1);
    }

    @GetMapping("/user/show-contacts/{page}")
    public ResponseEntity<Page<Contacts>> showContacts(@PathVariable("page") Integer page) {
        String username = (String) this.session.getAttribute("username");
        Pageable pageable = PageRequest.of(page, 10);
        User user1 = this.userRepository.findByEmail(username);
        Page<Contacts> contacts = this.contactRepository.findContactsByUser(user1.getId(), pageable);
        return ResponseEntity.ok(contacts);
    }

    @GetMapping("/user/dashboard")
    public ResponseEntity<String> dashboard() {
        String username = (String) this.session.getAttribute("username");
        User user1 = this.userRepository.findByEmail(username);
        return new ResponseEntity<>(user1.getName(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout() {
        this.session.removeAttribute("username");
        return ResponseEntity.ok("Logged out");
    }
    @GetMapping("/user/profile")
    public ResponseEntity<User> profile() {
        String username = (String) this.session.getAttribute("username");
        User user1 = this.userRepository.findByEmail(username);
        return new ResponseEntity<>(user1, HttpStatus.ACCEPTED);
    }
}