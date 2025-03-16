package com.example.demo.service;

import com.example.demo.domain.Product;

import java.util.List;

public interface ProductService {
    Product createProduct(Product entity);

    List<Product> getAllProduct();
}
