package com.example.demo.model;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Builder
@Data
public class PurchaseRequestModel {
    private UUID id;
    private String billNumber;
    private String date;
    private SupplierModel supplierModel;
    private List<ProductItem> items;
    private double totalBill;
}
