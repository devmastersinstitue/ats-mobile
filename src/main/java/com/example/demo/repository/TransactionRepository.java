package com.example.demo.repository;

import com.example.demo.domain.Customer;
import com.example.demo.domain.TransactionAudit;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface TransactionRepository extends MongoRepository<TransactionAudit, UUID> {
    Optional<TransactionAudit> findByCustomer(Customer customer);
}
