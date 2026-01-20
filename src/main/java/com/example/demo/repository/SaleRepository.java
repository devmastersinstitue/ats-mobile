package com.example.demo.repository;

import com.example.demo.domain.Sale;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface SaleRepository extends MongoRepository<Sale, UUID> {
    List<Sale> findAllByIsApprovalAndApprovedStatus(boolean approval, String approvedStatus);

    Optional<Sale> findByBillNumber(String billNumber);
}
