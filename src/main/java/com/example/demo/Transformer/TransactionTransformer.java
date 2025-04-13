package com.example.demo.Transformer;

import com.example.demo.domain.TransactionAudit;
import com.example.demo.model.TransactionAuditModel;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class TransactionTransformer {
    public TransactionAudit toEntity(TransactionAuditModel model) {
        if(model != null)
            return TransactionAudit.builder()
                    .id(model.getId() == null ? UUID.randomUUID() : model.getId())
                    .customer(model.getCustomer())
                    .amount(model.getAmount())
                    .description(model.getDescription())
                    .transactions(model.getTransactions())
                    .build();

        return null;
    }

    public List<TransactionAuditModel> toModelList(List<TransactionAudit> allTransaction) {
        return allTransaction.stream().map(this::toModel).toList();
    }

    private TransactionAuditModel toModel(TransactionAudit entity) {
        if(entity != null)
            return TransactionAuditModel.builder()
                    .id(entity.getId())
                    .customer(entity.getCustomer())
                    .amount(entity.getAmount())
                    .description(entity.getDescription())
                    .transactions(entity.getTransactions())
                    .build();
        return null;
    }
}
