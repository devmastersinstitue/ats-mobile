package com.example.demo.service;

import com.example.demo.domain.Employee;

import java.util.List;


public interface EmployeeService {

    void createEmployee(Employee employee);

    List<Employee> getAllEmployee();
}
