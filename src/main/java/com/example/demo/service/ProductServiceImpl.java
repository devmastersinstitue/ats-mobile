package com.example.demo.service;

import com.example.demo.domain.Product;
import com.example.demo.model.ProductItem;
import com.example.demo.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public Product createProduct(Product entity) {
        return productRepository.save(entity);
    }

    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public void updateSaleProductList(List<ProductItem> items, String status) {
        // Extract all product names from items
        List<String> productNames = items.stream().map(ProductItem::getName).collect(Collectors.toList());

        // Fetch all products in one query
        List<Product> products = productRepository.findAllByNameIn(productNames);

        // Create a map for quick lookup
        Map<String, Product> productMap = products.stream().collect(Collectors.toMap(Product::getName, product -> product));

        // Update product quantities
        for (ProductItem item : items) {
            Product product = productMap.get(item.getName());
            if (product != null) {
                if(status.equals("APPROVED")) {
                    product.setQuantity(product.getQuantity() - item.getQuantity());
                }else if(status.equals("REJECTED")){
                    product.setQuantity(product.getQuantity() + item.getQuantity());
                }
            }
        }

        // Save all updated products in one batch
        productRepository.saveAll(products);

    }
}
