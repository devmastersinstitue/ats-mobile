package com.example.demo.controller;

import com.example.demo.handler.SaleHandler;
import com.example.demo.model.ApprovedStatus;
import com.example.demo.model.SaleDTO;
import com.example.demo.model.SaleModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/sale")
@RequiredArgsConstructor
public class SaleController {
    private final SaleHandler saleHandler;

    @PostMapping
    public String createSale(@RequestBody SaleModel sale) {
        return saleHandler.createSale(sale);
    }

    @GetMapping("/create-bill-number")
    public long createBillNumber() {
        return saleHandler.createBillNumber();
    }

    @GetMapping
    public List<SaleModel> getAllSale(
            @RequestParam(required = false, defaultValue = "false") boolean isApproval,
            @RequestParam ApprovedStatus approvedStatus) {
        return saleHandler.getAllSale(isApproval, approvedStatus.name());
    }

    @PutMapping("/{billNumber}")
    public String updateSaleBill(@PathVariable String billNumber, @RequestBody SaleDTO saleDTO) {
        saleHandler.updateSaleBill(billNumber, saleDTO);
        return "Sale bill updated successfully!";
    }

    @PutMapping("/status")
    public String updateSaleStatus(@RequestParam String billNumber, @RequestParam String status, @RequestParam String userRole,
                                   @RequestParam String userName) {
        saleHandler.updateSaleStatus(billNumber, status, userRole, userName);
        return "Sale status updated successfully!";
    }
}
