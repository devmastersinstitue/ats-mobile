package com.example.demo.domain;

import com.example.demo.domain.user.Role;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@Builder
@Document(collection = "employee")
public class Employee {
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
