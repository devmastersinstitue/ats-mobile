package com.example.demo.handler;

import com.example.demo.Transformer.ProductTransformer;
import com.example.demo.model.ProductModel;
import com.example.demo.service.ProductService;
import com.google.zxing.WriterException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class ProductHandler {
    private final ProductTransformer productTransformer;
    private final ProductService productService;

    public ProductModel createProduct(ProductModel productModel) throws IOException, WriterException {
        return productTransformer.toModel(productService.createProduct(productTransformer.toEntity(productModel)));
    }

    public List<ProductModel> getAllProduct() {
        return productTransformer.toModelList(productService.getAllProduct());
    }

    public ProductModel updateProduct(ProductModel productModel) throws IOException, WriterException {
        return productTransformer.toModel(productService.createProduct(productTransformer.toEntity(productModel)));
    }
}
