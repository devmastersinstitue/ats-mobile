package com.example.demo.service;

import com.example.demo.Transformer.StudentTransformer;
import com.example.demo.domain.Address;
import com.example.demo.domain.Book;
import com.example.demo.domain.Human;
import com.example.demo.domain.Student;
import com.example.demo.model.BookModel;
import com.example.demo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

@Service
public class BookService {

    BookRepository bookRepository;
    @Autowired
    public BookService(BookRepository bookRepository) {
      this.bookRepository = bookRepository;
    }

    StudentTransformer studentTransformer = new StudentTransformer();

    public List<Book> createBookList() {
        List<Book> books = new ArrayList<>();
        books.add(new Book(UUID.randomUUID(),"English", "White", 500, new Human("Danish", new Address("Pakistan", "Bwp", "12"))));
        books.add(new Book(UUID.randomUUID(), "Urdu", "Gray", 1000, new Human("ALi", new Address("Pak", "Ape", "13"))));
        books.add(new Book(UUID.randomUUID(), "Math", "Skin", 2000, new Human("Alishba", new Address("Ind", "Ape", "11"))));
        books.add(new Book(UUID.randomUUID(), "Urdu", "White", 1000, new Human("Alishba", new Address("Ind", "Ape", "11"))));
        books.add(new Book(UUID.randomUUID(), "History", "Skin", 200, new Human("Ahmed", new Address("pak", "Bwp", "41"))));
        books.add(new Book(UUID.randomUUID(), "English", "Black", 900, new Human("Alishba", new Address("Ind", "Bwp", "10"))));
        books.add(new Book(UUID.randomUUID(), "Math", "Skin", 1500, new Human("Danish", new Address("Pakistan", "Ape", "19"))));
        books.add(new Book(UUID.randomUUID(), "Physics", "Blue", 2000, new Human("Ali", new Address("Ind", "Ape", "11"))));
        books.add(new Book(UUID.randomUUID(), "Computer", "White", 1000, new Human("Ali", new Address("Pak", "Ahmed pur East", "21"))));
        books.add(new Book(UUID.randomUUID(), "Science", "Skin", 2000, new Human("Alishba", new Address("Ind", "Ape", "11"))));
        books.add(new Book(UUID.randomUUID(), "Physics", "Gray", 1000, new Human("Alina", new Address("Pakistan", "Bwp", "12"))));
        books.add(new Book(UUID.randomUUID(), "Computer", "White", 400, new Human("Ali", new Address("Ind", "Bahawalpur", "21"))));
        books.add(new Book(UUID.randomUUID(), "Science", "Black", 1000, new Human("Alina", new Address("Pak", "Ape", "17"))));
        books.add(new Book(UUID.randomUUID(), "Math", "Skin", 2000, new Human("Alishba", new Address("Ind", "Bahawalpur", "11"))));
        books.add(new Book(UUID.randomUUID(), "English", "Skin", 1000, new Human("Danish", new Address("China", "Bahawalpur", "110"))));
        books.add(new Book(UUID.randomUUID(), "Bio", "White", 5000, new Human("Alishba", new Address("Pakistan", "Ape", "11"))));
        books.add(new Book(UUID.randomUUID(), "Math", "Skin", 2000, new Human("Ahmed", new Address("Pakistan", "Bwp", "10"))));
        books.add(new Book(UUID.randomUUID(), "Physics", "Black", 200, new Human("Ali", new Address("Ind", "Bahawalpur", "9"))));
        books.add(new Book(UUID.randomUUID(), "English", "Gray", 800, new Human("Alina", new Address("Pakistan", "Ahmed pur East", "9"))));
        books.add(new Book(UUID.randomUUID(), "Math", "Skin", 1000, new Human("Danish", new Address("Ind", "Bahawalpur", "9"))));
        return books;
    }

    public List<Book> getBookListWithPrice(List<Book> books, int price) {
        List<Book> bookList = new ArrayList<>();
        for (Book book : books) {
            if (book.getPrice() == price) {
                bookList.add(book);
            }
        }
        return bookList;
    }

    public List<Book> getBookListWithName(List<Book> books, String name) {
        List<Book> bookList = new ArrayList<>();
        for (Book book : books) {
            if (book.getName().equals(name)) {
                bookList.add(book);
            }
        }
        return bookList;
    }

    public List<Book> getBookListWithAuthorName(List<Book> books, String name) {
        List<Book> bookList = new ArrayList<>();
        for (Book book : books) {
            if (book.getAuthor().getName().equals(name)) {
                bookList.add(book);
            }
        }
        return bookList;
    }

    public List<Book> getBookListWithCountry(List<Book> books, String country) {
        List<Book> bookList = new ArrayList<>();
        for (Book book : books) {
            if (book.getAuthor().getAddress().getCountry().equals(country)) {
                bookList.add(book);
            }
        }
        return bookList;
    }

    public List<Book> getBookListWithCity(List<Book> books, String city) {
        List<Book> bookList = new ArrayList<>();
        for (Book book : books) {
            if (book.getAuthor().getAddress().getCity().equals(city)) {
                bookList.add(book);
            }
        }
        return bookList;
    }

    public List<Book> getBookListWithHouse(List<Book> books, String houseNo) {
        List<Book> bookList = new ArrayList<>();
        for (Book book : books) {
            if (book.getAuthor().getAddress().getHouseNo().equals(houseNo)) {
                bookList.add(book);
            }
        }
        return bookList;
    }

    public List<Book> getBookListCityNameAndHouseNumber(List<Book> books, String houseNo, String cityName) {
        List<Book> bookList = new ArrayList<>();
        for (Book book : books) {
            if (book.getAuthor().getAddress().getHouseNo().equals(houseNo) && book.getAuthor().getAddress().getCity().equals(cityName)) {
                bookList.add(book);
            }
        }
        return bookList;
    }

    public List<Book> getBookListWithPriceAndName(List<Book> books, int price, String name) {
        List<Book> bookList = new ArrayList<>();
        for (Book book : books) {
            if (book.getPrice() == (price) && book.getName().equals(name)) {
                bookList.add(book);
            }
        }
        return bookList;
    }

    public List<Book> getBookListWithAuthorNameAndCountryName(List<Book> books, String name, String country) {
        List<Book> bookList = new ArrayList<>();
        for (Book book : books) {
            if (book.getAuthor().getName().equals(name) && book.getAuthor().getAddress().getCountry().equals(country)) {
                bookList.add(book);
            }
        }
        return bookList;
    }

//    public String getStudentListWithBookName(List<Book> bookLists, List<Student> students, String bookName, String color) {
//        for (Book book : bookLists){
//            if (book.getName().equals(bookName) && book.getColor().equals(color)){
//                String studentName = "";
//                for (Student student : students){
//                   for(UUID bookId : student.getBooksIds()) {
//                        if(bookId == book.getId()){
//                            studentName += student.getHuman().getName() + ",";
//                        }
//                   }
//                }
//                return studentName;
//            }
//        }
//        return "Book cannot exists in our System.";
//    }
    public double getStudentAverage(List<Book> books) {
        double totalPrice=0;
        for (Book book : books){
          totalPrice += book.getPrice();
        }
        return totalPrice/books.size();
    }

    public List<BookModel> getBooksInfoAuthorWise(List<Book> books) {
        List<BookModel> bookModels = new ArrayList<>();
        for(Book book : books){
            boolean match = false;
            for(BookModel bookModel : bookModels){
                if(bookModel.getAuthorName().equals(book.getAuthor().getName())){
                    bookModel.getBookNames().add(book.getName());
                    match = true;
                }
            }
            if(match == false){
                bookModels.add(new BookModel(book.getAuthor().getName(), new LinkedList<String>() {{add(book.getName());}}));
            }
        }
        return bookModels;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();

    }

    public void save(List<Book> books) {
       bookRepository.saveAll(books);
    }
}



