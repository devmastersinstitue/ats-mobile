package com.example.demo.service;

import com.example.demo.domain.ReturnProduct;

import java.util.List;

public interface ReturnProductService {
    void saveReturnProduct(ReturnProduct returnProduct);
    List<ReturnProduct> getAllReturnProducts();
}
