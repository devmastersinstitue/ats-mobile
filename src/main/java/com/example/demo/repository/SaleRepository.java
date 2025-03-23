package com.example.demo.repository;

import com.example.demo.domain.Sale;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface SaleRepository extends MongoRepository<Sale, UUID> {

}
