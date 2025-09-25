package com.example.demo.handler;

import com.example.demo.Transformer.ReturnProductTransformer;
import com.example.demo.domain.ReturnProduct;
import com.example.demo.model.ReturnProductModel;
import com.example.demo.service.CustomerService;
import com.example.demo.service.ProductService;
import com.example.demo.service.ReturnProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ReturnProductHandler {
    private final ReturnProductService returnProductService;
    private final ReturnProductTransformer returnProductTransformer;
    private final CustomerService customerService;
    private final ProductService productService;


    public String saveReturnProduct(ReturnProductModel returnProductModel) {
        ReturnProduct returnProduct = returnProductTransformer.toEntity(returnProductModel);
        returnProductService.saveReturnProduct(returnProduct);
        customerService.updateCustomerInfoWhenReturnProduct(returnProduct);
        productService.updateReturnProductList(returnProduct);
        return "success";
    }
}
