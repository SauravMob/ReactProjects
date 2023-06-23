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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin("http://localhost:3001")
@Controller
public class UserController {

//    All the autowiring components

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ContactRepository contactRepository;

//    All the commons method
    @GetMapping("/home")
    public ResponseEntity home() {
        return ResponseEntity.ok("Home");
    }

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        user.setRole("USER");
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        this.userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(Principal principal) {
        if (principal.getName() != null) {
            return ResponseEntity.ok(principal.getName());
        } else {
            return ResponseEntity.ok("User Not Authorized");
        }
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout() {
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("Logged out");
    }

//    All the User Methods
    @GetMapping("/user/dashboard")
    public ResponseEntity dashboard(Principal principal) {
        User user1 = this.userRepository.findByEmail(principal.getName());
        if (user1 != null) {
            return new ResponseEntity(HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/user/profile")
    public ResponseEntity<User> profile(Principal principal) {
        User user1 = this.userRepository.findByEmail(principal.getName());
        return ResponseEntity.ok(user1);
    }

    @PostMapping("/user/add-contacts")
    public ResponseEntity addContact(@RequestBody Contacts contacts, Principal principal) {
        User user1 = this.userRepository.findByEmail(principal.getName());
        if (user1 != null) {
            contacts.setUser(user1);
            user1.getContacts().add(contacts);
            this.userRepository.save(user1);
            return new ResponseEntity(HttpStatus.CREATED);
        } else {
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
    }

    @PutMapping("/user/edit-contact/{id}")
    public ResponseEntity<Contacts> editContact(@PathVariable("id") Integer id, @RequestBody Contacts contacts, Principal principal) {
        Contacts contacts1 = this.contactRepository.findContactsById(id);
        contacts1.setName(contacts.getName());
        contacts1.setEmail(contacts.getEmail());
        contacts1.setPhone(contacts.getPhone());
        contacts1.setWork(contacts.getWork());
        contacts1.setAbout(contacts.getAbout());
        User user1 = this.userRepository.findByEmail(principal.getName());
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
    public ResponseEntity<Page<Contacts>> showContacts(@PathVariable("page") Integer page, Principal principal) {
        Pageable pageable = PageRequest.of(page, 10);
        User user1 = this.userRepository.findByEmail(principal.getName());
        Page<Contacts> contacts = this.contactRepository.findContactsByUser(user1.getId(), pageable);
        return ResponseEntity.ok(contacts);
    }

    @DeleteMapping("/user/delete-contact/{id}")
    public ResponseEntity<String> deleteContact(@PathVariable("id") Integer id, Principal principal) {
        Contacts contacts = this.contactRepository.findContactsById(id);
        User user1 = this.userRepository.findByEmail(principal.getName());
        user1.getContacts().remove(contacts);
        this.userRepository.save(user1);
        this.contactRepository.delete(contacts);
        return new ResponseEntity<>(HttpStatus.GONE);
    }
}