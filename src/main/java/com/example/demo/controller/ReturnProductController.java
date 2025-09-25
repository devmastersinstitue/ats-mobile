package com.example.demo.controller;

import com.example.demo.handler.ReturnProductHandler;
import com.example.demo.model.ReturnProductModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/return")
@RequiredArgsConstructor
public class ReturnProductController {
    private final ReturnProductHandler returnProductHandler;

    @PostMapping
    public String saveReturnProduct(@RequestBody ReturnProductModel returnProduct) {
        return returnProductHandler.saveReturnProduct(returnProduct);
    }
}
