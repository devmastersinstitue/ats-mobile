package com.example.demo.service;

import com.example.demo.domain.Expense;

import java.util.List;

public interface ExpenseService {
    Expense createExpense(Expense expense);

    List<Expense> getAllExpense();
}
