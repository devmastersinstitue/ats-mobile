package com.example.demo.Transformer;

import com.example.demo.domain.Customer;
import com.example.demo.domain.Root;
import com.example.demo.model.CustomerModel;
import com.example.demo.repository.RootRepository;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Component
public class CustomerTransformer {

    private final RootRepository rootRepository;

    public CustomerTransformer(RootRepository rootRepository) {
        this.rootRepository = rootRepository;
    }

    public Customer toEntity(CustomerModel model) {
        if(model != null)
            return Customer.builder()
                    .id(UUID.randomUUID())
                    .firstName(model.getFirstName())
                    .lastName(model.getLastName())
                    .contact(model.getContact())
                    .cnic(model.getCnic())
                    .email(model.getEmail())
                    .root(getRootRef(model.getRoot()))
                    .shopName(model.getShopName())
                    .address(model.getAddress())
                    .remainingAmount(model.getRemainingAmount())
                    .lastPaidDate(model.getLastPaidDate() == null ? null : model.getLastPaidDate())
                    .build();
        return null;
    }

    private Root getRootRef(String name) {
        Optional<Root> optionalRoot = rootRepository.findByName(name);
        if (optionalRoot.isPresent())
            return optionalRoot.get();
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
                    .root(entity.getRoot().getName())
                    .shopName(entity.getShopName())
                    .address(entity.getAddress())
                    .remainingAmount(entity.getRemainingAmount())
                    .lastPaidDate(entity.getLastPaidDate() == null ? "" : entity.getLastPaidDate())
                    .build();
        return null;
    }

    public List<CustomerModel> toModelList(List<Customer> allCustomer) {
        return allCustomer.stream().map(this::toModel).toList();
    }
}
