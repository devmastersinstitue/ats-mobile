package com.example.demo.service;

import com.example.demo.domain.Customer;
import com.example.demo.domain.Root;
import com.example.demo.domain.Sale;
import com.example.demo.domain.TransactionAudit;
import com.example.demo.model.DebitTransaction;
import com.example.demo.model.TransactionRequest;

import java.util.List;

public interface TransactionService {

    void createTransaction(Customer customer);

    List<TransactionAudit> getAllTransaction();

    String createDebitTransaction(TransactionRequest transactionRequest);

    void createCreditTransaction(Sale sale, Customer customer);

    void createDebitTransactionWhenSale(Sale sale, Customer customer);

    List<DebitTransaction> getDebitTransactions(String employeeCnic, String date, Root rootName);
}
