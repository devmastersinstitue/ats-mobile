package com.example.demo.controller;

import com.example.demo.handler.ProductHandler;
import com.example.demo.model.ProductModel;
import com.google.zxing.WriterException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductHandler productHandler;

    @PostMapping
    public ProductModel createProduct(@RequestBody ProductModel productModel) throws IOException, WriterException {
        return productHandler.createProduct(productModel);
    }

    @PutMapping
    public ProductModel updateProduct(@RequestBody ProductModel productModel) throws IOException, WriterException {
        return productHandler.updateProduct(productModel);
    }

    @GetMapping
    public List<ProductModel> getAllProduct() {
        return productHandler.getAllProduct();
    }

}
