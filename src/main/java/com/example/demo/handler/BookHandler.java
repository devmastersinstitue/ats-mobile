package com.example.demo.handler;

import com.example.demo.domain.Book;
import com.example.demo.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class BookHandler {
    private final BookService bookService;


    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    public void createBookList() {
        bookService.createBookList();
    }
}
