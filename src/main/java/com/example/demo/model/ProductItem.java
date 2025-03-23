package com.example.demo.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductItem {
    private String name;
    private int quantity;
    private double unitSalePrice;
    private double unitPurchasePrice;
    private double total;
}
