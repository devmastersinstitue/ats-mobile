package com.example.demo.domain;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@Builder
@Document(collection = "customer")
public class Customer {
    private UUID id;
    private String firstName;
    private String lastName;
    private String contact;
    private String cnic;
    private String email;
    private String route;
    private String shopName;
    private String address;
    private double remainingAmount;
}
