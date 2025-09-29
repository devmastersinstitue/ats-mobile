package com.example.demo.domain;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

import java.util.UUID;

@Data
@Builder
@Document(collection = "product")
public class Product {
    @Id
    private UUID id;
    private String itemCode;
    private String name;
    private String category;
    private double unitSalePrice;
    private double unitPurchasePrice;
    private int quantity;
    private boolean isActive;
    private int lowStockLimit;
    @DBRef
    private Supplier supplier;

    // 🔹 store barcode image as base64 string
    private String barcodeBase64;
}
