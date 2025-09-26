package com.example.demo.controller;
import com.example.demo.handler.EmployeeHandler;
import com.example.demo.model.EmployeeModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeHandler employeeHandler;

    @PostMapping
    public EmployeeModel createEmployee(@RequestBody EmployeeModel employeeModel){
        employeeHandler.createEmployee(employeeModel);
        return employeeModel;
    }

    @GetMapping
    public List<EmployeeModel> getAllEmployee(){
        return employeeHandler.getAllEmployee();
    }
}
