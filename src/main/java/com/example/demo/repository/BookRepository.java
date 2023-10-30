package com.example.demo.repository;

import com.example.demo.domain.Book;
import com.example.demo.domain.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

    public interface BookRepository extends MongoRepository<Book, UUID> {
           List<Book> findAllByHuman_Name(String name);

    }

