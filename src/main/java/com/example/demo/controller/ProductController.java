package com.example.demo.controller;

import com.example.demo.handler.ProductHandler;
import com.example.demo.model.ProductModel;
import com.google.zxing.WriterException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductHandler productHandler;
    // Keep track of all subscribers
    private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    @PostMapping
    public ProductModel createProduct(@RequestBody ProductModel productModel) throws IOException, WriterException {
        ProductModel productObject = productHandler.createProduct(productModel);

        // Notify all SSE subscribers about the new expense
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(productObject, MediaType.APPLICATION_JSON);
            } catch (IOException e) {
                emitters.remove(emitter); // remove dead connections
            }
        }
        return productObject;
    }

    @PutMapping
    public ProductModel updateProduct(@RequestBody ProductModel productModel) throws IOException, WriterException {
        return productHandler.updateProduct(productModel);
    }

    @GetMapping
    public List<ProductModel> getAllProduct() {
        return productHandler.getAllProduct();
    }

    // SSE endpoint
    @GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter streamExpenses() {
        SseEmitter emitter = new SseEmitter(Long.MAX_VALUE);
        emitters.add(emitter);

        emitter.onCompletion(() -> emitters.remove(emitter));
        emitter.onTimeout(() -> emitters.remove(emitter));

        return emitter;
    }
}
