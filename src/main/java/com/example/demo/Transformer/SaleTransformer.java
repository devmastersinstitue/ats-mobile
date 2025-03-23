package com.example.demo.Transformer;

import com.example.demo.domain.Customer;
import com.example.demo.domain.Sale;
import com.example.demo.model.ApprovedStatus;
import com.example.demo.model.CustomerModel;
import com.example.demo.model.SaleModel;
import com.example.demo.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class SaleTransformer {
    private final CustomerTransformer customerTransformer;
    private final CustomerService customerService;

    public Sale toSale(SaleModel model) {
        if (model != null)
            return Sale.builder()
                    .id(model.getId() == null ? UUID.randomUUID() : model.getId())
                    .billNumber(model.getBillNumber())
                    .date(model.getDate())
                    .employeeName(model.getEmployeeName())
                    .employeeRole(model.getEmployeeRole())
                    .customer(getCustomer(model.getCustomerModel()))
                    .remainingAmount(model.getRemainingAmount())
                    .items(model.getItems())
                    .totalBill(model.getTotalBill())
                    .discount(model.getDiscount())
                    .grandTotal(model.getGrandTotal())
                    .payedAmount(model.getPayedAmount())
                    .remainingBill(model.getRemainingBill())
                    .isApproval(model.isApproval())
                    .approvedBy(!model.getEmployeeRole().contains("Sales Man") ? model.getEmployeeRole()+"-"+model.getEmployeeName() : "")
                    .approvedStatus(model.isApproval() ? ApprovedStatus.APPROVED : ApprovedStatus.PENDING)
                    .build();
        return null;
    }

    private Customer getCustomer(CustomerModel customerModel) {
        return customerService.findByCnic(customerModel.getCnic());
    }

    public SaleModel toModel(Sale entity) {
        if (entity != null)
            return SaleModel.builder()
                    .id(entity.getId())
                    .billNumber(entity.getBillNumber())
                    .date(entity.getDate())
                    .employeeName(entity.getEmployeeName())
                    .employeeRole(entity.getEmployeeRole())
                    .customerModel(customerTransformer.toModel(entity.getCustomer()))
                    .remainingAmount(entity.getRemainingAmount())
                    .items(entity.getItems())
                    .totalBill(entity.getTotalBill())
                    .discount(entity.getDiscount())
                    .grandTotal(entity.getGrandTotal())
                    .payedAmount(entity.getPayedAmount())
                    .remainingBill(entity.getRemainingBill())
                    .isApproval(entity.isApproval())
                    .approvedBy(entity.getApprovedBy())
                    .approvedStatus(entity.getApprovedStatus().toString())
                    .build();
        return null;
    }
}
