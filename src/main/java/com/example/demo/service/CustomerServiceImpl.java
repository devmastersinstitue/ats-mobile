package com.example.demo.service;

import com.example.demo.domain.Customer;
import com.example.demo.domain.Sale;
import com.example.demo.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;
    private final TransactionService transactionService;

    @Override
    public String createCustomer(Customer customer) {
        Optional<Customer> dbCustomer = customerRepository.findByCnic(customer.getCnic());
        if(dbCustomer.isPresent())
            return "Customer already exists";
        customerRepository.save(customer);
        transactionService.createTransaction(customer);
        return "Customer created successfully";
    }

    @Override
    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }

    @Override
    public void updateCustomerInfoAfterSale(Sale sale) {
        Optional<Customer> customerOptional = customerRepository.findByCnic(sale.getCustomer().getCnic());
        if(customerOptional.isPresent()){
            Customer customer = customerOptional.get();
            if(sale.getPayedAmount() > 0.0)
                customer.setLastPaidDate(sale.getDate());
            if(sale.getRemainingAmount() == customer.getRemainingAmount())
                customer.setRemainingAmount(sale.getRemainingBill());
            else
                customer.setRemainingAmount(customer.getRemainingAmount()+sale.getRemainingBill()-sale.getRemainingAmount());
            customerRepository.save(customer);
            transactionService.createCreditTransaction(sale, customer);
            if(sale.getPayedAmount() > 0.0)
                transactionService.createDebitTransactionWhenSale(sale, customer);
        }
    }

    @Override
    public Optional<Customer> findByCnic(String cnic) {
        return customerRepository.findByCnic(cnic);
    }
}
