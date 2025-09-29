package com.example.demo.controller;

import com.example.demo.handler.EmployeeHandler;
import com.example.demo.model.EmployeeModel;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeHandler employeeHandler;

    // Store connected clients
    private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    @PostMapping
    public EmployeeModel createEmployee(@RequestBody EmployeeModel employeeModel){
        EmployeeModel savedEmployee = employeeHandler.createEmployee(employeeModel);

        // Notify all connected clients in real-time
        // Notify all SSE subscribers about the new expense
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(savedEmployee, MediaType.APPLICATION_JSON);
            } catch (IOException e) {
                emitters.remove(emitter); // remove dead connections
            }
        }

        return savedEmployee;
    }

    @GetMapping
    public List<EmployeeModel> getAllEmployee(){
        return employeeHandler.getAllEmployee();
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
