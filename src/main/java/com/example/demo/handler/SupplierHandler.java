package com.example.demo.handler;

import com.example.demo.Transformer.SupplierTransformer;
import com.example.demo.model.SupplierModel;
import com.example.demo.service.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class SupplierHandler {
    private final SupplierTransformer supplierTransformer;
    private final SupplierService supplierService;

    public SupplierModel create(SupplierModel supplierModel) {
        return supplierTransformer.toModel(supplierService.create(supplierTransformer.toEntity(supplierModel)));
    }

    public List<SupplierModel> getAllSupplier() {
        return supplierTransformer.toModelList(supplierService.getAllSupplier());
    }
}
