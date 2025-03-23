package com.example.demo.repository;

import com.example.demo.domain.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProductRepository extends MongoRepository<Product, UUID> {
    List<Product> findAllByNameIn(List<String> productNames);
}
