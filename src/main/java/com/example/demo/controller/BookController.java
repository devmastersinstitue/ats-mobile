package com.example.demo.controller;

import com.example.demo.domain.Book;
import com.example.demo.handler.BookHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "book")
public class BookController {
    private final BookHandler bookHandler;

    @GetMapping("/list")
    public List<Book> getAllBooks() {
        return bookHandler.getAllBooks();
    }

    @GetMapping("/list/create")
    public void createBooks(){
        bookHandler.createBookList();
    }

//    @GetMapping("/List/price/{price}")
//    public List<Book> getBookListWithPrice(@PathVariable int price) {
//        List<Book> books = bookService.createBookList();
//        books = bookService.getBookListWithPrice(books, price);
//        return books;
//    }
//
//    @GetMapping("/List/name/{name}")
//    public List<Book> getBookListWithName(@PathVariable String name) {
//        List<Book> books = bookService.createBookList();
//        books = bookService.getBookListWithName(books, name);
//        return books;
//    }
//
//    @GetMapping("/List/author/{name}")
//    public List<Book> getBookListWithAuthorName(@PathVariable String name) {
//        List<Book> books = bookService.createBookList();
//        books = bookService.getBookListWithAuthorName(books, name);
//        return books;
//    }
//
//    @GetMapping("/List/country/{country}")
//    public List<Book> getBookListWithCountry(@PathVariable String country) {
//        List<Book> books = bookService.createBookList();
//        books = bookService.getBookListWithCountry(books, country);
//        return books;
//    }
//
//    @GetMapping("/List/city/{city}")
//    public List<Book> getBookListWithCity(@PathVariable String city) {
//        List<Book> books = bookService.createBookList();
//        books = bookService.getBookListWithCity(books, city);
//        return books;
//    }
//
//    @GetMapping("/List/house/{houseNo}")
//    public List<Book> getBookListWithHouse(@PathVariable String houseNo) {
//        List<Book> books = bookService.createBookList();
//        books = bookService.getBookListWithHouse(books, houseNo);
//        return books;
//    }
//
//    @GetMapping("/list/city/{cityName}/house/{houseNo}")
//    public List<Book> getBookListCityNameAndHouseNumber(@PathVariable String cityName, @PathVariable String houseNo) {
//        List<Book> books = bookService.createBookList();
//        books = bookService.getBookListCityNameAndHouseNumber(books, houseNo, cityName);
//        return books;
//    }
//
//    @GetMapping("/list/price/{price}/name/{name}")
//    public List<Book> getBookListWithPriceAndName(@PathVariable int price, @PathVariable String name) {
//        List<Book> books = bookService.createBookList();
//        books = bookService.getBookListWithPriceAndName(books, price, name);
//        return books;
//
//    }
//
//    @GetMapping("/list/author/{name}/country/{country}")
//    public List<Book> getBookListWithAuthorNameAndCountryName(@PathVariable String name, @PathVariable String country) {
//        List<Book> books = bookService.createBookList();
//        books = bookService.getBookListWithAuthorNameAndCountryName(books, name, country);
//        return books;
//    }

//    @GetMapping("/students/{bookName}/color/{color}")
//    public String getStudentListWithBookName(@PathVariable String bookName, @PathVariable String color) {
//        List<Book> bookLists = bookService.createBookList();
//        List<Student> students = studentService.createStudentList();
//        return bookService.getStudentListWithBookName(bookLists, students, bookName, color);
//    }

//    @GetMapping("/average")
//    public double getStudentAverage() {
//        List<Book> books = bookService.createBookList();
//        return bookService.getStudentAverage(books);
//    }
//
//    @GetMapping("/author/bookInfo")
//    public List<BookModel> getBooksInfoAuthorWise(){
//        List<Book> books = bookService.createBookList();
//        return bookService.getBooksInfoAuthorWise(books);
//    }
}


