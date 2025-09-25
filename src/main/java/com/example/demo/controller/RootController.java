package com.example.demo.controller;

import com.example.demo.handler.RootHandler;
import com.example.demo.model.RootModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/root")
@RequiredArgsConstructor
public class RootController {
    private final RootHandler rootHandler;

    @PostMapping
    public RootModel create(@RequestBody RootModel rootModel){
        return rootHandler.create(rootModel);
    }

    @GetMapping
    public List<RootModel> getAllRoot(){
        return rootHandler.getAllRoot();
    }
}
