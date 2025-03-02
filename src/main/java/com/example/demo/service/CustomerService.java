package com.example.demo.service;

import com.example.demo.domain.Customer;

import java.util.List;

public interface CustomerService {
    void createCustomer(Customer customer);

    List<Customer> getAllCustomer();
}
