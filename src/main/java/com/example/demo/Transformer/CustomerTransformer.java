package com.example.demo.Transformer;

import com.example.demo.domain.Customer;
import com.example.demo.model.CustomerModel;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class CustomerTransformer {

    public Customer toEntity(CustomerModel model) {
        if(model != null)
            return Customer.builder()
                    .id(UUID.randomUUID())
                    .firstName(model.getFirstName())
                    .lastName(model.getLastName())
                    .contact(model.getContact())
                    .cnic(model.getCnic())
                    .email(model.getEmail())
                    .route(model.getRoute())
                    .shopName(model.getShopName())
                    .address(model.getAddress())
                    .remainingAmount(model.getRemainingAmount())
                    .build();
        return null;
    }

    public CustomerModel toModel(Customer entity) {
        if(entity != null)
            return CustomerModel.builder()
                    .id(entity.getId())
                    .firstName(entity.getFirstName())
                    .lastName(entity.getLastName())
                    .contact(entity.getContact())
                    .cnic(entity.getCnic())
                    .email(entity.getEmail())
                    .route(entity.getRoute())
                    .shopName(entity.getShopName())
                    .address(entity.getAddress())
                    .remainingAmount(entity.getRemainingAmount())
                    .build();
        return null;
    }

    public List<CustomerModel> toModelList(List<Customer> allCustomer) {
        return allCustomer.stream().map(this::toModel).toList();
    }
}
