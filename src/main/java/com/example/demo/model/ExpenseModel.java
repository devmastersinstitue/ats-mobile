package com.example.demo.model;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class ExpenseModel {
    private UUID id;
    private String name;
    private double amount;
    private String remarks;
    private String date;
}
