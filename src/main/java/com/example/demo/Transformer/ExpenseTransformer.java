package com.example.demo.Transformer;

import com.example.demo.domain.Expense;
import com.example.demo.model.ExpenseModel;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class ExpenseTransformer {
    public Expense toEntity(ExpenseModel model) {
        if(model != null)
            return Expense.builder()
                    .id(model.getId() == null ? UUID.randomUUID() : model.getId())
                    .name(model.getName())
                    .amount(model.getAmount())
                    .remarks(model.getRemarks())
                    .date(model.getDate())
                    .build();
        return null;
    }

    public ExpenseModel toModel(Expense entity) {
        if(entity != null)
            return ExpenseModel.builder()
                    .id(entity.getId())
                    .name(entity.getName())
                    .amount(entity.getAmount())
                    .remarks(entity.getRemarks())
                    .date(entity.getDate())
                    .build();
        return null;
    }

    public List<ExpenseModel> toModelList(List<Expense> allExpense) {
        return allExpense.stream().map(this::toModel).toList();
    }
}
