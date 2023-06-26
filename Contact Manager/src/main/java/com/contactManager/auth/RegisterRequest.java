package com.contactManager.auth;

import com.contactManager.entities.Contacts;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String name;
    private String email;
    private String phone;
    private String password;
    private String work;
    private String about;
    private boolean enabled;
    private List<Contacts> contacts;

}
