package com.example.demo.model;

import com.example.demo.domain.Employee;
import com.example.demo.domain.Root;
import lombok.Data;

@Data
public class DebitTransactionSearchCriteria {
    private Employee employee;
    private String date;
    private Root root;
}
