package com.example.demo.repository;

import com.example.demo.domain.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, UUID> {
    Optional<Employee> findByFirstNameAndRole(String firstName, String role);
    Optional<Employee> findByCnic(String cnic);
}
