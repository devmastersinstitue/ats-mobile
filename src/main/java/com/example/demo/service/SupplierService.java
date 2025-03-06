package com.example.demo.service;

import com.example.demo.domain.Supplier;

import java.util.List;

public interface SupplierService {
    Supplier create(Supplier entity);

    List<Supplier> getAllSupplier();
}
