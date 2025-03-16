package com.example.demo.controller;

import com.example.demo.handler.ExpenseHandler;
import com.example.demo.model.ExpenseModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/expenses")
@RequiredArgsConstructor
public class ExpenseController {
    private final ExpenseHandler expenseHandler;

    @PostMapping
    public ExpenseModel createExpense(@RequestBody ExpenseModel expenseModel) {
        return expenseHandler.createExpense(expenseModel);
    }

    @GetMapping
    public List<ExpenseModel> getAllExpense() {
        return expenseHandler.getAllExpense();
    }
}
