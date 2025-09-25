package com.example.demo.model;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Builder
public class ReturnProductModel {
    private UUID id;
    private String returnBillNumber;
    private String date;
    private String employeeName;
    private String employeeRole;
    private CustomerModel customerModel;
    private List<ProductItem> items;
    private double totalReturnAmount;
}
