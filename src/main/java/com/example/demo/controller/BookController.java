package com.example.demo.controller;

import com.example.demo.domain.Book;
import com.example.demo.handler.BookHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "books")
public class BookController {
    private final BookHandler bookHandler;

    @GetMapping("/detail")
    public List<Book> getAllBooks() {
        return bookHandler.getAllBooks();
    }

    @PostMapping("/create")
    public String createBook(@RequestBody Book book){
        bookHandler.createBook(book);
        return "Book Created Successfully.";
    }

    @GetMapping("/create")
    public void createBooks(){
        bookHandler.createBookList();
    }

    @GetMapping("price/{price}")
    public List<Book> getBookListWithPrice(@PathVariable int price){
        return bookHandler.getBookListWithPrice(price);
    }

    @GetMapping("name/{name}")
    public List<Book> getBookListWithName(@PathVariable String name) {
       return bookHandler.getBookListWithName(name);
    }

    @GetMapping("/author/{name}")
    public List<Book> getBookListWithAuthorName(@PathVariable String name) {
       return bookHandler.getBookListWithAuthorName(name);
    }

    @GetMapping("/country/{country}")
    public List<Book> getBookListWithCountry(@PathVariable String country) {
        return bookHandler.getBookListWithCountry(country);
    }

    @GetMapping("city/{city}")
    public List<Book> getBookListWithCity(@PathVariable String city) {
        return bookHandler.getBookListWithCity(city);
    }

    @GetMapping("house/{houseNo}")
    public List<Book> getBookListWithHouse(@PathVariable String houseNo) {
       return bookHandler.getBookListWithHouseNo(houseNo);
    }

    @GetMapping("/city/{cityName}/house/{houseNo}")
    public List<Book> getBookListWithCityNameAndHouseNumber(@PathVariable String cityName, @PathVariable String houseNo){
       return bookHandler.getBookListWithCityNameAndHouseNumber(cityName,houseNo);
    }

    @GetMapping("/price/{price}/name/{name}")
    public List<Book> getBookListWithPriceAndName(@PathVariable int price, @PathVariable String name) {
        return bookHandler.getBookListWithPriceAndName(price,name);
    }

    @GetMapping("/author/{name}/country/{country}")
    public List<Book> getBookListWithAuthorNameAndCountry(@PathVariable String name, @PathVariable String country) {
       return bookHandler.getBookListWithAuthorNameAndCountry(name,country);
    }

//    @GetMapping("/{bookName}/color/{color}")
//    public String getStudentNameListWithBookName(@PathVariable String bookName, @PathVariable String color) {
//      return bookHandler.getStudentNameListWithBookName(bookName,color);
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


