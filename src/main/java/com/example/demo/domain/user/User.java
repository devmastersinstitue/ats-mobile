package com.example.demo.domain.user;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "users")
public class User {
    @Id
    private UUID id;
    private String username;
    private String firstName;
    private String lastName;
    private String contact;
    private String cnic;
    private String email;
    private String password;
    private Role role;
    private String address;

}
