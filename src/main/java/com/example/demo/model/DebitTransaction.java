package com.example.demo.model;

import com.example.demo.domain.Customer;
import com.example.demo.domain.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DebitTransaction {
    private String date;
    private double amount;
    private String type;
    private Customer customer;
    private Employee employee;

}
