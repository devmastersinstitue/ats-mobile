package com.example.demo.controller;

import com.example.demo.handler.PurchaseHandler;
import com.example.demo.model.PurchaseRequestModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/purchase")
@RequiredArgsConstructor
public class PurchaseController {
    private final PurchaseHandler purchaseHandler;


    @PostMapping
    public String savePurchase(@RequestBody PurchaseRequestModel purchaseRequestModel) {
        purchaseHandler.savePurchase(purchaseRequestModel);
        return "Purchase saved successfully!";
    }

    @GetMapping
    public List<PurchaseRequestModel> getAllPurchase() {
        return purchaseHandler.getAllPurchase();
    }
}
