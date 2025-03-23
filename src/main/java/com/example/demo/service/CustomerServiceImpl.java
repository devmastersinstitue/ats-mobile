package com.example.demo.service;

import com.example.demo.domain.Customer;
import com.example.demo.domain.Sale;
import com.example.demo.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;

    @Override
    public void createCustomer(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }

    @Override
    public void updateCustomerInfoAfterSale(Sale sale) {
        Customer customer = customerRepository.findByCnic(sale.getCustomer().getCnic());
        if(sale.getPayedAmount() > 0.0)
            customer.setLastPaidDate(sale.getDate());
        if(sale.getRemainingAmount() == customer.getRemainingAmount())
            customer.setRemainingAmount(sale.getRemainingBill());
        else
            customer.setRemainingAmount(customer.getRemainingAmount()+sale.getRemainingBill()-sale.getRemainingAmount());
        customerRepository.save(customer);
    }

    @Override
    public Customer findByCnic(String cnic) {
        return customerRepository.findByCnic(cnic);
    }
}
