package com.example.demo.handler;

import com.example.demo.Transformer.SaleTransformer;
import com.example.demo.domain.Sale;
import com.example.demo.model.*;
import com.example.demo.service.CustomerService;
import com.example.demo.service.ProductService;
import com.example.demo.service.SaleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class SaleHandler {
    private final SaleTransformer saleTransformer;
    private final SaleService saleService;
    private final CustomerService customerService;
    private final ProductService productService;

    public String createSale(SaleModel saleModel) {
        Sale sale = saleTransformer.toSale(saleModel);
        saleService.createSale(sale);
        if(sale.isApproval())
            customerService.updateCustomerInfoAfterSale(sale);
        productService.updateSaleProductList(sale.getItems(), "APPROVED");
        return "Successfully Saved";
    }

    public long createBillNumber() {
        return saleService.createBillNumber();
    }


    public List<SaleModel> getAllSale(boolean isApproval, String approvedStatus) {
        return saleTransformer.toModelList(saleService.getAllSale(isApproval, approvedStatus));
    }

    public void updateSaleBill(String billNumber, SaleDTO saleDTO) {
        Optional<Sale> optionalSale = saleService.getBillByBillNumber(billNumber);
        if (optionalSale.isPresent()) {
            optionalSale.get().setTotalBill(saleDTO.getTotalBill());
            optionalSale.get().setGrandTotal(saleDTO.getGrandTotal());
            optionalSale.get().setRemainingBill(saleDTO.getRemainingBill());

            Map<String, SaleItemDTO> updatedItemsMap = saleDTO.getItems().stream()
                    .collect(Collectors.toMap(SaleItemDTO::getName, item -> item));

            for ( ProductItem saleItem : optionalSale.get().getItems()) {
                if (updatedItemsMap.containsKey(saleItem.getName())) {
                    SaleItemDTO updatedItem = updatedItemsMap.get(saleItem.getName());

                    // Update price and total
                    saleItem.setUnitSalePrice(updatedItem.getUnitSalePrice());
                    saleItem.setTotal(updatedItem.getQuantity() * updatedItem.getUnitSalePrice());
                }
            }
            saleService.createSale(optionalSale.get());
        }
    }

    public void updateSaleStatus(String billNumber, String status, String userRole, String userName) {
        Optional<Sale> optionalSale = saleService.getBillByBillNumber(billNumber);
        Sale sale = optionalSale.get();
        sale.setApprovedStatus(ApprovedStatus.valueOf(status));
        sale.setApprovedBy(userRole + "-" + userName);

        if(status.equals("APPROVED")) {
            sale.setApproval(true);
            customerService.updateCustomerInfoAfterSale(sale);
        }else if(status.equals("REJECTED")) {
            productService.updateSaleProductList(sale.getItems(), "REJECTED");
        }
        saleService.createSale(sale);
    }
}
