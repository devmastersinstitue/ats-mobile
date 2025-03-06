package com.example.demo.service;

import com.example.demo.domain.Supplier;
import com.example.demo.repository.SupplierRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SupplierServiceImpl implements SupplierService{
    private final SupplierRepository supplierRepository;
    @Override
    public Supplier create(Supplier supplier) {
        supplierRepository.save(supplier);
        return supplier;
    }

    @Override
    public List<Supplier> getAllSupplier() {
        return supplierRepository.findAll();
    }
}
