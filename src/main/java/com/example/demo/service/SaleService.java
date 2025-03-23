package com.example.demo.service;

import com.example.demo.domain.Sale;
import com.example.demo.model.ApprovedStatus;

import java.util.List;
import java.util.Optional;

public interface SaleService {
    void createSale(Sale sale);

    long createBillNumber();

    List<Sale> getAllSale(boolean isApproval, String approvedStatus);

    Optional<Sale> getBillByBillNumber(String billNumber);
}
