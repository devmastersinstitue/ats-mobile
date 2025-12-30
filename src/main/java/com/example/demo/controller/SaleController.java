package com.example.demo.controller;

import com.example.demo.handler.SaleHandler;
import com.example.demo.model.ApprovedStatus;
import com.example.demo.model.SaleDTO;
import com.example.demo.model.SaleModel;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/sale")
@RequiredArgsConstructor
public class SaleController {
    private final SaleHandler saleHandler;
    // Keep track of all subscribers
    private final List<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    @PostMapping
    public String createSale(@RequestBody SaleModel sale) {
        String saleStringObject =  saleHandler.createSale(sale);
        // Notify all SSE subscribers about the new expense
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(saleStringObject, MediaType.APPLICATION_JSON);
            } catch (IOException e) {
                emitters.remove(emitter); // remove dead connections
            }
        }
        return saleStringObject;
    }

    @GetMapping("/create-bill-number")
    public long createBillNumber() {
        return saleHandler.createBillNumber();
    }

    @GetMapping
    public List<SaleModel> getAllSale(
            @RequestParam(required = false, defaultValue = "false") boolean isApproval,
            @RequestParam ApprovedStatus approvedStatus) {
        return saleHandler.getAllSale(isApproval, approvedStatus.name());
    }

    @PutMapping("/{billNumber}")
    public String updateSaleBill(@PathVariable String billNumber, @RequestBody SaleDTO saleDTO) {
        saleHandler.updateSaleBill(billNumber, saleDTO);
        return "Sale bill updated successfully!";
    }

    @PutMapping("/status")
    public String updateSaleStatus(@RequestParam String billNumber, @RequestParam String status, @RequestParam String userRole,
                                   @RequestParam String userName) {
        saleHandler.updateSaleStatus(billNumber, status, userRole, userName);
        return "Sale status updated successfully!";
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
