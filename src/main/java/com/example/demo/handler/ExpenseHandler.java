package com.example.demo.handler;

import com.example.demo.Transformer.ExpenseTransformer;
import com.example.demo.model.ExpenseModel;
import com.example.demo.service.ExpenseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ExpenseHandler {
    private final ExpenseTransformer expenseTransformer;
    private final ExpenseService expenseService;


    public ExpenseModel createExpense(ExpenseModel expenseModel) {
        return expenseTransformer.toModel(expenseService.createExpense(expenseTransformer.toEntity(expenseModel)));
    }

    public List<ExpenseModel> getAllExpense() {
        return expenseTransformer.toModelList(expenseService.getAllExpense());
    }
}
