package com.example.demo.Transformer;

import com.example.demo.domain.Product;
import com.example.demo.domain.Supplier;
import com.example.demo.model.ProductModel;
import com.example.demo.service.BarcodeGeneratorService;
import com.example.demo.service.SupplierService;
import com.google.zxing.WriterException;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Component
public class ProductTransformer {
    private final SupplierService supplierService;

    public ProductTransformer(SupplierService supplierService) {
        this.supplierService = supplierService;
    }

    public Product toEntity(ProductModel model) throws IOException, WriterException {
        if(model != null)
            return Product.builder()
                    .id(model.getId() == null ? UUID.randomUUID() : model.getId())
                    .itemCode(model.getItemCode())
                    .name(model.getName())
                    .category(model.getCategory())
                    .unitSalePrice(model.getUnitSalePrice())
                    .unitPurchasePrice(model.getUnitPurchasePrice())
                    .quantity(model.getQuantity())
                    .isActive(true)
                    .lowStockLimit(model.getLowStockLimit())
                    .supplier(getSupplier(model.getCompanyName()))
                    .barcodeBase64(BarcodeGeneratorService.createCode128Base64(model.getItemCode()))
                    .build();
        return null;
    }

    private Supplier getSupplier(String companyName) {
        return supplierService.findByCompanyName(companyName);
    }

    public ProductModel toModel(Product entity) {
        if(entity != null)
            return ProductModel.builder()
                    .id(entity.getId())
                    .itemCode(entity.getItemCode())
                    .name(entity.getName())
                    .category(entity.getCategory())
                    .unitSalePrice(entity.getUnitSalePrice())
                    .unitPurchasePrice(entity.getUnitPurchasePrice())
                    .quantity(entity.getQuantity())
                    .isActive(entity.isActive())
                    .lowStockLimit(entity.getLowStockLimit())
                    .companyName(entity.getSupplier().getCompanyName())
                    .barcodeBase64(entity.getBarcodeBase64())
                    .build();
        return null;
    }

    public List<ProductModel> toModelList(List<Product> allProduct) {
        return allProduct.stream().map(this::toModel).toList();
    }
}
