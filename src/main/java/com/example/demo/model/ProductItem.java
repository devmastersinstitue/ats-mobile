package com.example.demo.model;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class ProductItem {
    private UUID id;
    private String name;
    private int quantity;
    private double unitSalePrice;
    private double unitPurchasePrice;
    private double total;
}
