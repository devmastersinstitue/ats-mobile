package com.example.demo.domain;

import com.example.demo.model.Transaction;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Data
@Builder
@Document(collection = "transaction")
public class TransactionAudit {
    private UUID id;
    @DBRef
    private Customer customer;
    private double amount;
    private String description;
    private List<Transaction> transactions;
}
