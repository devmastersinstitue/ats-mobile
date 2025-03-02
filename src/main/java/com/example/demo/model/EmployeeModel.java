package com.example.demo.model;

import com.example.demo.domain.user.Role;
import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class EmployeeModel {
    private UUID id;
    private String firstName;
    private String lastName;
    private String contact;
    private String cnic;
    private String email;
    private String password;
    private Role role;
    private String address;
}
