package com.example.demo.domain;


import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.UUID;

@Data
@Builder
@Document(collection = "root")
public class Root {
    private UUID id;
    private String name;
    private boolean isActive;
}
