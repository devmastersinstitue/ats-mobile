package com.example.demo.controller;

import com.example.demo.handler.SupplierHandler;
import com.example.demo.model.SupplierModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/supplier")
@RequiredArgsConstructor
public class SupplierController {
    private final SupplierHandler supplierHandler;

    @PostMapping
    public SupplierModel create(@RequestBody SupplierModel supplierModel) {
        return supplierHandler.create(supplierModel);
    }

    @GetMapping
    public List<SupplierModel> getAllSupplier() {
        return supplierHandler.getAllSupplier();
    }
}
