package com.contactManager.controller;

import com.contactManager.Service.UserService;
import com.contactManager.entities.Contacts;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @GetMapping("/user/dashboard")
    public ResponseEntity dashboard(
            Principal principal
    ) {
        return ResponseEntity.ok(service.dashboard(principal.getName()));
    }

    @GetMapping("/user/profile")
    public ResponseEntity profile(
            Principal principal
    ) {
        return ResponseEntity.ok(service.profile(principal.getName()));
    }

    @PostMapping("/user/add-contact")
    public ResponseEntity addContact(
            @RequestBody Contacts contacts,
            Principal principal
    ) {
        return ResponseEntity.ok(service.addContact(contacts, principal.getName()));
    }

    @PutMapping("/user/edit-contact/{id}")
    public ResponseEntity editContact(
            @PathVariable("id") Integer id,
            @RequestBody Contacts contacts,
            Principal principal
    ) {
        return ResponseEntity.ok(service.editContact(id, contacts, principal.getName()));
    }

    @GetMapping("/user/get-contact/{id}")
    public ResponseEntity getContact(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(service.getContact(id));
    }

    @GetMapping("/user/show-contacts/{page}")
    public ResponseEntity showContacts(@PathVariable("page") Integer page, Principal principal) {
        return ResponseEntity.ok(service.allContacts(page, principal.getName()));
    }

    @DeleteMapping("/user/delete-contact/{id}")
    public ResponseEntity deleteContact(@PathVariable("id") Integer id, Principal principal) {
        return ResponseEntity.ok(service.deleteContact(id, principal.getName()));
    }
}
