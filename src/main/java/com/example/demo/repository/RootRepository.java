package com.example.demo.repository;

import com.example.demo.domain.Root;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RootRepository extends MongoRepository<Root, UUID> {
    Optional<Root> findByName(String name);
}
