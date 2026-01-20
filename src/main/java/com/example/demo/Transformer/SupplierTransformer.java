package com.example.demo.Transformer;

import com.example.demo.domain.Supplier;
import com.example.demo.model.SupplierModel;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class SupplierTransformer {
    public Supplier toEntity(SupplierModel supplierModel) {
        if (supplierModel != null)
            return Supplier.builder()
                    .id(UUID.randomUUID())
                    .firstName(supplierModel.getFirstName())
                    .lastName(supplierModel.getLastName())
                    .contact(supplierModel.getContact())
                    .email(supplierModel.getEmail())
                    .city(supplierModel.getCity())
                    .address(supplierModel.getAddress())
                    .companyName(supplierModel.getCompanyName())
                    .isActive(true)
                    .build();
        return null;
    }

    public SupplierModel toModel(Supplier supplier) {
        if (supplier != null)
            return SupplierModel.builder()
                    .id(supplier.getId())
                    .firstName(supplier.getFirstName())
                    .lastName(supplier.getLastName())
                    .contact(supplier.getContact())
                    .email(supplier.getEmail())
                    .city(supplier.getCity())
                    .address(supplier.getAddress())
                    .companyName(supplier.getCompanyName())
                    .isActive(supplier.isActive())
                    .build();
        return null;
    }

    public List<SupplierModel> toModelList(List<Supplier> allSupplier) {
        return allSupplier.stream().map(this::toModel).toList();
    }
}
