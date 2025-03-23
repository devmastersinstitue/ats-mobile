package com.example.demo.model;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SaleDTO {
    private String billNumber;
    private double totalBill;
    private double grandTotal;
    private double remainingBill;
    private List<SaleItemDTO> items;
}
