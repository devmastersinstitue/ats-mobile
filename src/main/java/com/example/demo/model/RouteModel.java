package com.example.demo.model;

import lombok.*;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RouteModel {
    private UUID id;
    private String routeName;
}
