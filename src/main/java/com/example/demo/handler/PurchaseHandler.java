package com.example.demo.handler;

import com.example.demo.Transformer.PurchaseTransformer;
import com.example.demo.model.PurchaseRequestModel;
import com.example.demo.service.PurchaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class PurchaseHandler {
    private final PurchaseTransformer purchaseTransformer;
    private final PurchaseService purchaseService;

    public String savePurchase(PurchaseRequestModel purchaseRequestModel) {
        purchaseService.savePurchase(purchaseTransformer.toEntity(purchaseRequestModel));
        return "Purchase saved successfully!";
    }

    public List<PurchaseRequestModel> getAllPurchase() {
        return purchaseTransformer.toModels(purchaseService.getAllPurchases());
    }
}
