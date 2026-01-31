package com.example.demo.service;

import com.example.demo.domain.ReturnProduct;
import com.example.demo.repository.ReturnProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReturnProductServiceImpl implements ReturnProductService {
    private final ReturnProductRepository returnProductRepository;

    @Override
    public void saveReturnProduct(ReturnProduct returnProduct) {
        returnProductRepository.save(returnProduct);
    }

    @Override
    public List<ReturnProduct> getAllReturnProducts() {
        return returnProductRepository.findAll();
    }
}
