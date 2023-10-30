package com.example.demo.controller;

import com.example.demo.domain.Human2;
import com.example.demo.service.HumanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping(path = "api/v1/human")

public class HumanController {
    private final HumanService humanService;

    @Autowired
    public HumanController(HumanService humanService) {
        this.humanService =  humanService;
    }

    @GetMapping(path = "/info")
    public List<Human2> Humans() {
       return humanService.getHumans();
    }
}
