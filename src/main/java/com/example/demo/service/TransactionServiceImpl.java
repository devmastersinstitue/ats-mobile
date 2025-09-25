package com.example.demo.service;

import com.example.demo.domain.*;
import com.example.demo.model.*;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {
    private final TransactionRepository transactionRepository;
    private final CustomerRepository customerRepository;
    private final EmployeeRepository employeeRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public void createTransaction(Customer customer) {
        Optional<TransactionAudit> transactionAuditOptional = transactionRepository.findByCustomer(customer);
        if (!transactionAuditOptional.isPresent()) {
            TransactionAudit transactionAudit = TransactionAudit.builder().id(UUID.randomUUID()).customer(customer).amount(customer.getRemainingAmount()).description("").transactions(createInitialTransactionRecord(customer)).build();
            transactionRepository.save(transactionAudit);
        }
    }

    private List<Transaction> createInitialTransactionRecord(Customer customer) {
        List<Transaction> transactions = new ArrayList<>();
        String formattedDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy-hh:mm a"));
        transactions.add(Transaction.builder().date(formattedDate).type(TransactionType.CREDIT).amount(customer.getRemainingAmount()).remainingAmount(customer.getRemainingAmount()).build());
        return transactions;
    }

    @Override
    public List<TransactionAudit> getAllTransaction() {
        return transactionRepository.findAll();
    }

    @Override
    public String createDebitTransaction(TransactionRequest transactionRequest) {
        Optional<Customer> customerOptional = customerRepository.findByCnic(transactionRequest.getCustomerCnic());
        if (customerOptional.isPresent()) {
            Optional<TransactionAudit> transactionAuditOptional = transactionRepository.findByCustomer(customerOptional.get());
            if (transactionAuditOptional.isPresent()) {
                Optional<Employee> employeeOptional = employeeRepository.findByFirstNameAndRole(transactionRequest.getEmployeeName(), transactionRequest.getEmployeeRole().toString());
                if (employeeOptional.isPresent()) {
                    Employee employee = employeeOptional.get();
                    TransactionAudit transactionAudit = transactionAuditOptional.get();
                    return saveTransaction(transactionRequest, transactionAudit, employee, customerOptional.get());
                }
                return "Employee not found";
            }
        }
        return "Customer not found";
    }

    @Override
    public void createCreditTransaction(Sale sale, Customer customer) {
        Optional<TransactionAudit> transactionAuditOptional = transactionRepository.findByCustomer(customer);
        if (transactionAuditOptional.isPresent()) {
            TransactionAudit transactionAudit = transactionAuditOptional.get();
            Optional<Employee> employeeOptional = employeeRepository.findByFirstNameAndRole(sale.getEmployeeName(), sale.getEmployeeRole());
            Transaction transaction = Transaction.builder()
                    .date(sale.getDate())
                    .type(TransactionType.CREDIT)
                    .amount(sale.getTotalBill() - sale.getDiscount())
                    .employee(employeeOptional.orElse(null))
                    .remainingAmount(transactionAudit.getAmount() + sale.getTotalBill() - sale.getDiscount())
                    .build();
            transactionAudit.setAmount(transactionAudit.getAmount() + sale.getTotalBill() - sale.getDiscount());
            transactionAudit.getTransactions().add(transaction);
            transactionRepository.save(transactionAudit);
            customer.setRemainingAmount(transactionAudit.getAmount());
            customerRepository.save(customer);
        }
    }

    @Override
    public void createDebitTransactionWhenSale(Sale sale, Customer customer) {
        Optional<TransactionAudit> transactionAuditOptional = transactionRepository.findByCustomer(customer);
        if (transactionAuditOptional.isPresent()) {
            TransactionAudit transactionAudit = transactionAuditOptional.get();
            Optional<Employee> employeeOptional = employeeRepository.findByFirstNameAndRole(sale.getEmployeeName(), sale.getEmployeeRole());
            Transaction transaction = Transaction.builder()
                    .date(sale.getDate())
                    .type(TransactionType.DEBIT)
                    .amount(sale.getPayedAmount())
                    .remainingAmount(transactionAudit.getAmount() - sale.getPayedAmount())
                    .employee(employeeOptional.orElse(null))
                    .build();
            transactionAudit.setAmount(transactionAudit.getAmount() - sale.getPayedAmount());
            transactionAudit.getTransactions().add(transaction);
            transactionRepository.save(transactionAudit);
            customer.setLastPaidDate(sale.getDate());
            customer.setRemainingAmount(transactionAudit.getAmount());
            customerRepository.save(customer);
        }
    }

    private String saveTransaction(TransactionRequest transactionRequest, TransactionAudit transactionAudit, Employee employee, Customer customer) {
        Transaction transaction = Transaction.builder().date(transactionRequest.getDateTime()).type(transactionRequest.getTransactionType()).amount(transactionRequest.getAmount()).remainingAmount(transactionAudit.getAmount() - transactionRequest.getAmount()).employee(employee).build();
        transactionAudit.setAmount(transactionAudit.getAmount() - transactionRequest.getAmount());
        transactionAudit.getTransactions().add(transaction);
        transactionRepository.save(transactionAudit);
        customer.setLastPaidDate(transactionRequest.getDateTime());
        customer.setRemainingAmount(transactionAudit.getAmount());
        customerRepository.save(customer);
        return "Transaction created successfully";
    }

    @Override
    public List<DebitTransaction> getDebitTransactions(String employeeCnic, String date, Root root) {
        // Step 1: Unwind transactions array
        UnwindOperation unwind = Aggregation.unwind("transactions");

        Criteria criteria = Criteria.where("transactions.type").is("DEBIT")
                .and("transactions.date").regex(date);

        Optional<Employee> employeeOptional = employeeRepository.findByCnic(employeeCnic);
        if (employeeOptional.isPresent()) {
            criteria = criteria.andOperator(
                    Criteria.where("transactions.employee.$id").is(employeeOptional.get().getId()),
                    Criteria.where("transactions.employee").exists(true)
            );
        }

        MatchOperation match = Aggregation.match(criteria);
        // Step 3: Project desired fields
        ProjectionOperation project = Aggregation.project()
                .andExclude("_id")
                .and("customer").as("customer")
                .and("transactions.type").as("type")
                .and("transactions.amount").as("amount")
                .and("transactions.date").as("date")
                .and("transactions.employee").as("employee");

        // Step 4: Create aggregation pipeline
        Aggregation aggregation = Aggregation.newAggregation(unwind, match, project);

        // Step 5: Execute aggregation
        return mongoTemplate.aggregate(aggregation, "transaction", DebitTransaction.class).getMappedResults();
    }

    @Override
    public void createReturnTransaction(ReturnProduct returnProduct, Customer customer) {
        Optional<TransactionAudit> transactionAuditOptional = transactionRepository.findByCustomer(customer);
        if (transactionAuditOptional.isPresent()) {
            TransactionAudit transactionAudit = transactionAuditOptional.get();
            Optional<Employee> employeeOptional = employeeRepository.findByFirstNameAndRole(returnProduct.getEmployeeName(), returnProduct.getEmployeeRole());
            Transaction transaction = Transaction.builder()
                    .date(returnProduct.getDate())
                    .type(TransactionType.DEBIT)
                    .amount(returnProduct.getTotalReturnAmount())
                    .employee(employeeOptional.orElse(null))
                    .remainingAmount(transactionAudit.getAmount() - returnProduct.getTotalReturnAmount())
                    .build();
            transactionAudit.setAmount(transactionAudit.getAmount() - returnProduct.getTotalReturnAmount());
            transactionAudit.getTransactions().add(transaction);
            transactionRepository.save(transactionAudit);
            customer.setRemainingAmount(transactionAudit.getAmount());
            customerRepository.save(customer);
        }
    }

}
