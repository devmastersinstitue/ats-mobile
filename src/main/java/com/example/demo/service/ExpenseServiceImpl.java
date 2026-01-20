package com.example.demo.service;

import com.example.demo.domain.Expense;
import com.example.demo.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExpenseServiceImpl implements ExpenseService {
    private final ExpenseRepository expenseRepository;

    @Override
    public Expense createExpense(Expense expense) {
        expenseRepository.save(expense);
        return expense;
    }

    @Override
    public List<Expense> getAllExpense() {
        return expenseRepository.findAll();
    }
}
