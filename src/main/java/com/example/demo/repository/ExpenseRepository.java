package com.example.demo.repository;

import com.example.demo.domain.Expense;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ExpenseRepository extends MongoRepository<Expense, UUID> {
}
