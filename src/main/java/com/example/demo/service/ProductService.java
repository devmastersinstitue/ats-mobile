package com.example.demo.service;

import com.example.demo.domain.Product;
import com.example.demo.model.ProductItem;

import java.util.List;

public interface ProductService {
    Product createProduct(Product entity);

    List<Product> getAllProduct();

    void updateSaleProductList(List<ProductItem> items);
}
