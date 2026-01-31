package com.example.demo.controller;

import com.example.demo.handler.PurchaseHandler;
import com.example.demo.model.PurchaseRequestModel;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/purchase")
@RequiredArgsConstructor
public class PurchaseController {
    private final PurchaseHandler purchaseHandler;
    // Keep track of all subscribers
    private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();


    @PostMapping
    public String savePurchase(@RequestBody PurchaseRequestModel purchaseRequestModel) {
        String response = purchaseHandler.savePurchase(purchaseRequestModel);
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(response, MediaType.APPLICATION_JSON);
            } catch (IOException e) {
                emitters.remove(emitter); // remove dead connections
            }
        }
        return response;
    }

    @GetMapping
    public List<PurchaseRequestModel> getAllPurchase() {
        return purchaseHandler.getAllPurchase();
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
