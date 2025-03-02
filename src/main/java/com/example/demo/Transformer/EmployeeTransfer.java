package com.example.demo.Transformer;

import com.example.demo.domain.Employee;
import com.example.demo.model.EmployeeModel;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class EmployeeTransfer {
    public Employee toEntity(EmployeeModel model){
        if (model != null)
            return Employee.builder()
                    .id(UUID.randomUUID())
                    .firstName(model.getFirstName())
                    .lastName(model.getLastName())
                    .contact(model.getContact())
                    .cnic(model.getCnic())
                    .email(model.getEmail())
                    .password(model.getPassword())
                    .role(model.getRole())
                    .address(model.getAddress())
                    .build();
        return null;
    }

    public EmployeeModel toModel(Employee entity){
        if (entity != null)
            return EmployeeModel.builder()
                    .id(entity.getId())
                    .firstName(entity.getFirstName())
                    .lastName(entity.getLastName())
                    .contact(entity.getContact())
                    .cnic(entity.getCnic())
                    .email(entity.getEmail())
                    .password(entity.getPassword())
                    .role(entity.getRole())
                    .address(entity.getAddress())
                    .build();
        return null;
    }

    public List<EmployeeModel> toModelList(List<Employee> employeeList) {
        return employeeList.stream().map(this::toModel).toList();
    }
}
