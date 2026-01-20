package com.example.demo.service;

import com.example.demo.domain.Sale;
import com.example.demo.model.ApprovedStatus;
import com.example.demo.repository.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SaleServiceImpl implements SaleService{
    private final SaleRepository saleRepository;
    @Override
    public void createSale(Sale sale) {
        saleRepository.save(sale);
    }

    @Override
    public long createBillNumber() {
        return (saleRepository.count()+1);
    }

    @Override
    public List<Sale> getAllSale(boolean isApproval, String approvedStatus) {
        return saleRepository.findAllByIsApprovalAndApprovedStatus(isApproval, approvedStatus);
    }

    @Override
    public Optional<Sale> getBillByBillNumber(String billNumber) {
        return saleRepository.findByBillNumber(billNumber);
    }
}
