package com.example.demo.repository;

import com.example.demo.domain.ReturnProduct;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ReturnProductRepository extends MongoRepository<ReturnProduct, UUID> {
}
