package com.example.demo.controller;

import com.example.demo.domain.Root;
import com.example.demo.handler.TransactionHandler;
import com.example.demo.model.DebitTransaction;
import com.example.demo.model.TransactionAuditModel;
import com.example.demo.model.TransactionRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/transaction")
@RequiredArgsConstructor
public class TransactionController {
    private final TransactionHandler transactionHandler;

    @GetMapping
    public List<TransactionAuditModel> getAllTransaction() {
        return transactionHandler.getAllTransaction();
    }

    @PostMapping("/debit")
    public String createDebitTransaction(@RequestBody TransactionRequest transactionRequest) {
        return transactionHandler.createDebitTransaction(transactionRequest);
    }

    @GetMapping("/debit-records")
    public List<DebitTransaction> getAllDebitTransaction(@RequestParam(required = false) String employeeCnic,
                                                         @RequestParam(required = false) String date,
                                                         @RequestParam(required = false) Root rootName) {
        return transactionHandler.getAllDebitTransaction(employeeCnic, date, rootName);
    }
}
