package com.example.demo.handler;

import com.example.demo.Transformer.TransactionTransformer;
import com.example.demo.domain.Root;
import com.example.demo.model.DebitTransaction;
import com.example.demo.model.TransactionAuditModel;
import com.example.demo.model.TransactionRequest;
import com.example.demo.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class TransactionHandler {
    private final TransactionTransformer transactionTransformer;
    private final TransactionService transactionService;


    public List<TransactionAuditModel> getAllTransaction() {
        return transactionTransformer.toModelList(transactionService.getAllTransaction());
    }

    public String createDebitTransaction(TransactionRequest transactionRequest) {
        return transactionService.createDebitTransaction(transactionRequest);
    }

    public List<DebitTransaction> getAllDebitTransaction(String employeeCnic, String date, Root rootName) {
        return transactionService.getDebitTransactions(employeeCnic, date, rootName);
    }
}
