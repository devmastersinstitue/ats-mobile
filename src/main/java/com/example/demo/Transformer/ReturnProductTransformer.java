package com.example.demo.Transformer;

import com.example.demo.domain.ReturnProduct;
import com.example.demo.model.ReturnProductModel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class ReturnProductTransformer {
    private final CustomerTransformer customerTransformer;

    public ReturnProduct toEntity(ReturnProductModel model) {
        if(model == null)
            return null;

        return ReturnProduct.builder()
                .id(model.getId() == null ? UUID.randomUUID() : model.getId())
                .returnBillNumber(model.getReturnBillNumber())
                .date(model.getDate())
                .employeeName(model.getEmployeeName())
                .employeeRole(model.getEmployeeRole())
                .customer(customerTransformer.toEntity(model.getCustomerModel()))
                .items(model.getItems())
                .totalReturnAmount(model.getTotalReturnAmount())
                .build();
    }
}
