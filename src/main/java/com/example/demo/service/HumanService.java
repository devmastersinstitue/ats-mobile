package com.example.demo.service;

import com.example.demo.domain.Human2;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HumanService {
    public List<Human2> getHumans(){
        return List.of(
                new Human2(
                     "Alishba",
                     "Tasleem",
                     20
                )
        );

    }
}
