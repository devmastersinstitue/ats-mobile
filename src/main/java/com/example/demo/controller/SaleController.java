package com.example.demo.controller;

import com.example.demo.handler.SaleHandler;
import com.example.demo.model.SaleModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/sale")
@RequiredArgsConstructor
public class SaleController {
    private final SaleHandler saleHandler;

    @PostMapping
    public String createSale(@RequestBody SaleModel sale) {
        return saleHandler.createSale(sale);
    }

    @GetMapping("/create-bill-number")
    public long createBillNumber() {
        return saleHandler.createBillNumber();
    }
}
