package com.example.demo.domain;

import java.util.List;
import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "students")
public class Student {
    @Id
    private UUID id;
    private double fees;
    private Human human;
    private List<Integer> booksIds;

    public Student(UUID id, double fees, List<Integer> booksIds, Human human) {
        this.id = id;
        this.fees = fees;
        this.booksIds = booksIds;
        this.human = human;
    }

    public List<Integer> getBooksIds() {
        return booksIds;
    }

    public UUID getId() {
        return id;
    }

    public double getFees() {
        return fees;
    }

    public Human getHuman() {
        return human;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setFees(double fees) {
        this.fees = fees;
    }

    public void setHuman(Human human) {
        this.human = human;
    }

    public void setBooksIds(List<Integer> booksIds) {
        this.booksIds = booksIds;
    }
}
