package com.example.demo.repository;

import com.example.demo.domain.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface CustomerRepository extends MongoRepository<Customer, UUID> {
    Optional<Customer> findByCnic(String cnic);
}
