package com.example.demo.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "books")
public class Book {
    @Id
    private  UUID id;
    private String name;
    private String color;
    private int price;
    private Human author;


    public Book(UUID id, String name, String color, int price, Human author) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.price = price;
        this.author = author;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getColor() {
        return color;
    }

    public int getPrice() {
        return price;
    }

    public Human getAuthor() {
        return author;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setAuthor(Human author) {
        this.author = author;
    }
}
