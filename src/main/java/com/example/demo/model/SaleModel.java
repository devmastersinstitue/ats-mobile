package com.example.demo.model;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Builder
public class SaleModel {
    private UUID id;
    private String billNumber;
    private String date;
    private String employeeName;
    private String employeeRole;
    private CustomerModel customerModel;
    private double remainingAmount;
    private List<ProductItem> items;
    private double totalBill;
    private double discount;
    private double grandTotal;
    private double payedAmount;
    private double remainingBill;
    private boolean isApproval;
    private String approvedStatus;
    private String approvedBy;
}
