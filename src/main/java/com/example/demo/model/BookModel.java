package com.example.demo.model;

import java.util.List;

public class BookModel {
    String authorName;
    List<String> bookNames;

    public BookModel(String authorName, List<String> bookNames) {
        this.authorName = authorName;
        this.bookNames = bookNames;
    }

    public String getAuthorName() {
        return authorName;
    }

    public List<String> getBookNames() {
        return bookNames;
    }
}
