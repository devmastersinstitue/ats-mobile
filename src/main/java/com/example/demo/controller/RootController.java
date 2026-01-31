package com.example.demo.controller;

import com.example.demo.handler.RootHandler;
import com.example.demo.model.RootModel;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/root")
@RequiredArgsConstructor
public class RootController {
    private final RootHandler rootHandler;
    // Keep track of all subscribers
    private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    @PostMapping
    public RootModel create(@RequestBody RootModel rootModel){
        RootModel rootObject = rootHandler.create(rootModel);
        // Notify all SSE subscribers about the new expense
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(rootObject, MediaType.APPLICATION_JSON);
            } catch (IOException e) {
                emitters.remove(emitter); // remove dead connections
            }
        }
        return rootObject;
    }

    @GetMapping
    public List<RootModel> getAllRoot(){
        return rootHandler.getAllRoot();
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
