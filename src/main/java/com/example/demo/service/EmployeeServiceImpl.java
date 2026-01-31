package com.example.demo.service;

import com.example.demo.domain.Employee;
import com.example.demo.domain.user.User;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final UserRepository userRepository;

    @Override
    public void createEmployee(Employee employee) {
        employeeRepository.save(employee);
        userRepository.save(User.builder()
                .id(employee.getId())
                .firstName(employee.getFirstName())
                .lastName(employee.getLastName())
                .contact(employee.getContact())
                .email(employee.getEmail())
                .cnic(employee.getCnic())
                .password(employee.getPassword())
                .role(employee.getRole())
                .build());
    }

    @Override
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }
}
