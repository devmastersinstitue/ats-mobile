package com.example.demo.repository;

import com.example.demo.domain.user.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends MongoRepository<User, UUID> {
    Optional<User> findByEmailAndPassword(String email, String password);
}
