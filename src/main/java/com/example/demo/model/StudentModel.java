package com.example.demo.model;

import java.util.UUID;

public class StudentModel {
    private UUID id;
    private String name;
    private int age;
    private String address;

    public StudentModel(UUID id, String name, int age, String address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getAddress() {
        return address;
    }
}
