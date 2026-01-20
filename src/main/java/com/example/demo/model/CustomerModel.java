package com.example.demo.model;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class CustomerModel {
    private UUID id;
    private String firstName;
    private String lastName;
    private String contact;
    private String cnic;
    private String email;
    private String root;
    private String shopName;
    private String address;
    private double remainingAmount;
    private String lastPaidDate;
}
