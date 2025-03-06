package com.example.demo.model;

import lombok.Builder;
import lombok.Data;
import java.util.UUID;

@Data
@Builder
public class SupplierModel {
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
