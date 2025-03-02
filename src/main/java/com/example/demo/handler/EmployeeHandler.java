package com.example.demo.handler;

import com.example.demo.Transformer.EmployeeTransfer;
import com.example.demo.domain.Employee;
import com.example.demo.model.EmployeeModel;
import com.example.demo.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class EmployeeHandler {
    private final EmployeeTransfer employeeTransfer;
    private final EmployeeService employeeService;

    public void createEmployee(EmployeeModel employeeModel) {
        Employee employee = employeeTransfer.toEntity(employeeModel);
        employeeService.createEmployee(employee);
    }

    public List<EmployeeModel> getAllEmployee() {
        List<Employee> employeeList = employeeService.getAllEmployee();
        return employeeTransfer.toModelList(employeeList);
    }
}
