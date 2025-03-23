package com.example.demo.service;

import com.example.demo.domain.Sale;

public interface SaleService {
    void createSale(Sale sale);

    long createBillNumber();
}
