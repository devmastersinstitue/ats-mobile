package com.example.demo.domain;

import com.example.demo.model.ProductItem;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@Data
@Builder
@Document(collection = "purchase")
public class Purchase {
    private UUID id;
    private String billNumber;
    private String date;
    @DBRef
    private Supplier supplier;
    private List<ProductItem> items;
    private double totalBill;
}
