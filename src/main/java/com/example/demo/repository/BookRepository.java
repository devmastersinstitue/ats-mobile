package com.example.demo.repository;

import com.example.demo.domain.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.UUID;
public interface BookRepository extends MongoRepository<Book, UUID> {
           List<Book> findAllByPrice(int price);
           List<Book> findAllByName(String name);
           List<Book> findAllByAuthor_Name(String name);
           List<Book> findAllByAuthor_Address_Country(String country);
           List<Book> findAllByAuthor_Address_City(String city);
           List<Book> findAllByAuthor_Address_HouseNo(String houseNo);
           @Query(value = "{'author.address.houseNo': ?0, 'author.address.city': ?1}")
           List<Book> findAllByAuthor_Address_CityAndAuthor_Address_HouseNo(String houseNo, String cityName);
           @Query(value = "{'price' : ?0,'name': ?1}")
           List<Book> findAllByPriceAndName(int price,String name);
           @Query(value = "{'author' : ?0, 'country' : ?1}")
           List<Book> findAllByAuthor_NameAndAndAuthor_Address_Country(String name,String country);

           Book findByNameAndColor(String bookName, String color);

}

