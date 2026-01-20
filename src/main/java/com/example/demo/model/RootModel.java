package com.example.demo.model;
import lombok.*;

import java.util.UUID;

@Getter
@Setter
@Builder
public class RootModel {
    private UUID id;
    private String name;
    private boolean isActive;
}
