package com.contactManager.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "contacts")
public class Contacts {

    @Id
    @GeneratedValue
    private int cid;

    private String name;

    @Email
    @Column(unique = true)
    private String email;

    @Column(unique = true)
    @Pattern(regexp = "[0-9]{10}", message = "Phone number should be 10 digits")
    private String phone;

    private String work;

    private String about;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;
}
