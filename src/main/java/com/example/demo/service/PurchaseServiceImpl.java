package com.example.demo.service;

import com.example.demo.domain.Purchase;
import com.example.demo.repository.PurchaseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PurchaseServiceImpl implements PurchaseService{
    private final ProductService productService;
    private final PurchaseRepository purchaseRepository;
    @Override
    public void savePurchase(Purchase purchase) {
        productService.updatePurchaseProductList(purchase.getItems());
        purchaseRepository.save(purchase);
    }

    @Override
    public List<Purchase> getAllPurchases() {
        return purchaseRepository.findAll();
    }
}
