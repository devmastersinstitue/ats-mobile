package com.example.demo.controller;


import com.example.demo.handler.CustomerHandler;
import com.example.demo.model.CustomerModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/customer")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerHandler customerHandler;


    @PostMapping
    public CustomerModel createCustomer(@RequestBody CustomerModel customerModel){
        customerHandler.createCustomer(customerModel);
        return customerModel;
    }

    @GetMapping
    public List<CustomerModel> getAllCustomer() {
        return customerHandler.getAllCustomer();
    }
}
