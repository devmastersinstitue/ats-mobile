package com.example.demo.service;

import com.example.demo.domain.Customer;
import com.example.demo.domain.Sale;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    String createCustomer(Customer customer);

    List<Customer> getAllCustomer();

    void updateCustomerInfoAfterSale(Sale sale);

    Optional<Customer> findByCnic(String cnic);
}
