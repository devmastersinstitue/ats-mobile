package com.example.demo.Transformer;

import com.example.demo.domain.ReturnProduct;
import com.example.demo.model.ReturnProductModel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

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

    public ReturnProductModel toModel(ReturnProduct entity) {
        if(entity == null)
            return null;

        return ReturnProductModel.builder()
                .id(entity.getId())
                .returnBillNumber(entity.getReturnBillNumber())
                .date(entity.getDate())
                .employeeName(entity.getEmployeeName())
                .employeeRole(entity.getEmployeeRole())
                .customerModel(customerTransformer.toModel(entity.getCustomer()))
                .items(entity.getItems())
                .totalReturnAmount(entity.getTotalReturnAmount())
                .build();
    }

    public List<ReturnProductModel> toModelList(List<ReturnProduct> entities) {
        if(entities == null)
            return null;
        return entities.stream()
                .map(this::toModel)
                .collect(Collectors.toList());
    }
}
