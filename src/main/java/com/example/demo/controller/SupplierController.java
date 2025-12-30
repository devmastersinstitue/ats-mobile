package com.example.demo.controller;

import com.example.demo.handler.SupplierHandler;
import com.example.demo.model.SupplierModel;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/supplier")
@RequiredArgsConstructor
public class SupplierController {
    private final SupplierHandler supplierHandler;
    // Keep track of all subscribers
    private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    @PostMapping
    public SupplierModel create(@RequestBody SupplierModel supplierModel) {
        SupplierModel supplierObject =  supplierHandler.create(supplierModel);
        // Notify all SSE subscribers about the new expense
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(supplierObject, MediaType.APPLICATION_JSON);
            } catch (IOException e) {
                emitters.remove(emitter); // remove dead connections
            }
        }
        return supplierObject;
    }

    @GetMapping
    public List<SupplierModel> getAllSupplier() {
        return supplierHandler.getAllSupplier();
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
