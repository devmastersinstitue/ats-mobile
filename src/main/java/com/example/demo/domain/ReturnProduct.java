package com.example.demo.domain;

import com.example.demo.model.ProductItem;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Data
@Builder
@Document(collection = "returnProduct")
public class ReturnProduct {
    private UUID id;
    private String returnBillNumber;
    private String date;
    private String employeeName;
    private String employeeRole;
    private Customer customer;
    private List<ProductItem> items;
    private double totalReturnAmount;
}
