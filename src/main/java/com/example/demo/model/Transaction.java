package com.example.demo.model;

import com.example.demo.domain.Employee;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.DBRef;

@Data
@Builder
public class Transaction {
    private TransactionType type;
    private double amount;
    private double remainingAmount;
    private String date;
    @DBRef
    private Employee employee;
}
