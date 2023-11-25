package com.example.demo.handler;

import com.example.demo.domain.Book;
import com.example.demo.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

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

    public List<Book> getBookListWithPrice(int price) {
        return bookService.getBookListWithPrice(price);
    }

    public List<Book> getBookListWithName(String name) {
        return bookService.getBookListWithName(name);
    }

    public List<Book> getBookListWithAuthorName(String name) {
        return bookService.getBookListWithAuthorName(name);
    }

    public List<Book> getBookListWithCountry(String country) {
        return bookService.getBookListWithCountry(country);
    }

    public List<Book> getBookListWithCity(String city) {
        return bookService.getBookListWithCity(city);
    }

    public List<Book> getBookListWithHouseNo(String houseNo) {
        return bookService.getBookListWithHouseNo(houseNo);
    }

    public List<Book> getBookListWithCityNameAndHouseNumber(String cityName, String houseNo) {
        return bookService.getBookListCityNameAndHouseNumber(cityName,houseNo);
    }

    public List<Book> getBookListWithPriceAndName(int price, String name) {
        return bookService.getBookListWithPriceAndName(price,name);
    }

    public List<Book> getBookListWithAuthorNameAndCountry(String name, String country) {
        return bookService.getBookListWithAuthorNameAndCountry(name,country);
    }

    public String getStudentNameListWithBookName(String bookName, String color) {
        return bookService.getStudentNameListWithBookName(bookName,color);
    }

    public void createBook(Book book) {
        book.setId(UUID.randomUUID());
        bookService.createBook(book);
    }

    public List<String> getAllAuthorNames() {
        return bookService.getAllAuthorNames();
    }

    public List<String> getAuthorAddress(String name) {
        return bookService.getAuthorAddress(name);
    }
}
