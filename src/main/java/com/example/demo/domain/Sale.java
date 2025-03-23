package com.example.demo.domain;

import com.example.demo.model.ApprovedStatus;
import com.example.demo.model.ProductItem;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Data
@Builder
@Document("sale")
public class Sale {
    @Id
    private UUID id;
    private String billNumber;
    private String date;
    private String employeeName;
    private String employeeRole;
    @DBRef
    private Customer customer;
    private double remainingAmount;
    private List<ProductItem> items;
    private double totalBill;
    private double discount;
    private double grandTotal;
    private double payedAmount;
    private double remainingBill;
    private boolean isApproval;
    private ApprovedStatus approvedStatus;
    private String approvedBy;
}
