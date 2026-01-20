package com.example.demo.controller;


import com.example.demo.handler.CustomerHandler;
import com.example.demo.model.CustomerModel;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import java.io.IOException;
import java.util.concurrent.CopyOnWriteArrayList;


import java.util.List;

@RestController
@RequestMapping("/customer")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerHandler customerHandler;

    // Keep track of all SSE clients
    private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    @PostMapping
    public String createCustomer(@RequestBody CustomerModel customerModel) {
        String result = customerHandler.createCustomer(customerModel);

        // Notify all connected SSE clients
        emitters.forEach(emitter -> {
            try {
                emitter.send(SseEmitter.event()
                        .name("new-customer")
                        .data(customerModel));
            } catch (IOException e) {
                emitter.completeWithError(e);
            }
        });

        return result;
    }

    @GetMapping
    public List<CustomerModel> getAllCustomer() {
        return customerHandler.getAllCustomer();
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
