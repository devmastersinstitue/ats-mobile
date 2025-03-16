package com.example.demo.domain;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@Builder
@Document(collection = "expenses")
public class Expense {
    private UUID id;
    private String name;
    private double amount;
    private String remarks;
    private String date;
}
