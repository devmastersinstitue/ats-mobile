package com.example.demo.model;

import com.example.demo.domain.Customer;
import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Builder
public class TransactionAuditModel {
    private UUID id;
    private Customer customer;
    private double amount;
    private String description;
    private List<Transaction> transactions;
}
