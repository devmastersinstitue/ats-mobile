package com.example.demo.model;

import com.example.demo.domain.user.Role;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TransactionRequest {
    private String customerCnic;
    private double amount;
    private String employeeName;
    private Role employeeRole;
    private String dateTime;
    private TransactionType transactionType;
}
