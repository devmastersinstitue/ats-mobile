package com.example.demo.service;

import com.example.demo.domain.Sale;
import com.example.demo.repository.SaleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
}
