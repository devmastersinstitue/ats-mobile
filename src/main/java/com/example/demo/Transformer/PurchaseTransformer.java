package com.example.demo.Transformer;

import com.example.demo.domain.Purchase;
import com.example.demo.domain.Supplier;
import com.example.demo.model.PurchaseRequestModel;
import com.example.demo.model.SupplierModel;
import com.example.demo.service.SupplierService;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class PurchaseTransformer {
    private final SupplierService supplierService;
    private final SupplierTransformer supplierTransformer;

    public PurchaseTransformer(SupplierService supplierService, SupplierTransformer supplierTransformer) {
        this.supplierService = supplierService;
        this.supplierTransformer = supplierTransformer;
    }

    public Purchase toEntity(PurchaseRequestModel model) {
        if(model != null)
            return Purchase.builder()
                    .id(UUID.randomUUID())
                    .billNumber(model.getBillNumber())
                    .date(model.getDate())
                    .supplier(getSupplier(model.getSupplierModel()))
                    .items(model.getItems())
                    .totalBill(model.getTotalBill())
                    .build();
        return null;
    }

    private Supplier getSupplier(SupplierModel supplierModel) {
        return supplierService.findByCompanyName(supplierModel.getCompanyName());
    }

    public List<PurchaseRequestModel> toModels(List<Purchase> allPurchases) {
        return allPurchases.stream().map(this::toModel).toList();
    }

    private PurchaseRequestModel toModel(Purchase entity) {
        if(entity != null)
            return PurchaseRequestModel.builder()
                    .id(entity.getId())
                    .billNumber(entity.getBillNumber())
                    .date(entity.getDate())
                    .supplierModel(supplierTransformer.toModel(entity.getSupplier()))
                    .items(entity.getItems())
                    .totalBill(entity.getTotalBill())
                    .build();
        return null;
    }
}
