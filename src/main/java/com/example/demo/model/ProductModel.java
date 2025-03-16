package com.example.demo.model;

import lombok.*;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductModel {
    private UUID id;
    private String itemCode;
    private String name;
    private String category;
    private double unitSalePrice;
    private double unitPurchasePrice;
    private int quantity;
    private double differencePrice;
    private boolean isActive;
    private int lowStockLimit;
    private String companyName;
}