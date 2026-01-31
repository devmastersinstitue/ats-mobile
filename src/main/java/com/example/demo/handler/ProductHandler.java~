package com.example.demo.handler;

import com.example.demo.Transformer.ProductTransformer;
import com.example.demo.model.ProductModel;
import com.example.demo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ProductHandler {
    private final ProductTransformer productTransformer;
    private final ProductService productService;

    public ProductModel createProduct(ProductModel productModel) {
        return productTransformer.toModel(productService.createProduct(productTransformer.toEntity(productModel)));
    }

    public List<ProductModel> getAllProduct() {
        return productTransformer.toModelList(productService.getAllProduct());
    }

    public ProductModel updateProduct(ProductModel productModel) {
        return productTransformer.toModel(productService.createProduct(productTransformer.toEntity(productModel)));
    }
}
