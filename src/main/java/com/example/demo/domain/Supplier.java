package com.example.demo.domain;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@Builder
@Document(collection = "supplier")
public class Supplier {
    private UUID id;
    private String firstName;
    private String lastName;
    private String contact;
    private String email;
    private String city;
    private String address;
    private String companyName;
    private boolean isActive;
}
