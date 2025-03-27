package com.example.demo.service;

import com.example.demo.domain.Purchase;

import java.util.List;

public interface PurchaseService {
    void savePurchase(Purchase purchase);

    List<Purchase> getAllPurchases();
}
