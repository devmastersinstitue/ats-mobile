package com.example.demo.service;

import com.example.demo.domain.Customer;
import com.example.demo.domain.Sale;

import java.util.List;

public interface CustomerService {
    void createCustomer(Customer customer);

    List<Customer> getAllCustomer();

    void updateCustomerInfoAfterSale(Sale sale);

    Customer findByCnic(String cnic);
}
