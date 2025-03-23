package com.example.demo.handler;

import com.example.demo.Transformer.SaleTransformer;
import com.example.demo.domain.Sale;
import com.example.demo.model.SaleModel;
import com.example.demo.service.CustomerService;
import com.example.demo.service.ProductService;
import com.example.demo.service.SaleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

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
        productService.updateSaleProductList(sale.getItems());
        return "Successfully Saved";
    }

    public long createBillNumber() {
        return saleService.createBillNumber();
    }
}
