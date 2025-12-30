package com.example.demo.controller;

import com.example.demo.domain.Root;
import com.example.demo.handler.TransactionHandler;
import com.example.demo.model.DebitTransaction;
import com.example.demo.model.TransactionAuditModel;
import com.example.demo.model.TransactionRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/transaction")
@RequiredArgsConstructor
public class TransactionController {
    private final TransactionHandler transactionHandler;
    // Keep track of all subscribers
    private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    @GetMapping
    public List<TransactionAuditModel> getAllTransaction() {
        return transactionHandler.getAllTransaction();
    }

    @PostMapping("/debit")
    public String createDebitTransaction(@RequestBody TransactionRequest transactionRequest) {
        String response = transactionHandler.createDebitTransaction(transactionRequest);
        // Notify all SSE subscribers about the new expense
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(response, MediaType.APPLICATION_JSON);
            } catch (IOException e) {
                emitters.remove(emitter); // remove dead connections
            }
        }
        return response;
    }

    @GetMapping("/debit-records")
    public List<DebitTransaction> getAllDebitTransaction(@RequestParam(required = false) String employeeCnic,
                                                         @RequestParam(required = false) String date,
                                                         @RequestParam(required = false) Root rootName) {
        return transactionHandler.getAllDebitTransaction(employeeCnic, date, rootName);
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
