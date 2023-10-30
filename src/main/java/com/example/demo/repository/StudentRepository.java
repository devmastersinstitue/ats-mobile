package com.example.demo.repository;

import com.example.demo.domain.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface StudentRepository extends MongoRepository<Student, UUID> {

    List<Student> findAllByHuman_Age(int age);
}

