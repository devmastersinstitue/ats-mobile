package com.example.demo.handler;

import com.example.demo.Transformer.CustomerTransformer;
import com.example.demo.domain.Customer;
import com.example.demo.model.CustomerModel;
import com.example.demo.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CustomerHandler {
    private final CustomerTransformer customerTransformer;
    private final CustomerService customerService;

    public void createCustomer(CustomerModel customerModel) {
        Customer customer = customerTransformer.toEntity(customerModel);
        customerService.createCustomer(customer);
    }

    public List<CustomerModel> getAllCustomer() {
        return customerTransformer.toModelList(customerService.getAllCustomer());
    }
}
