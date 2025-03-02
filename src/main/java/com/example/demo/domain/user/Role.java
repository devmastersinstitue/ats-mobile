package com.example.demo.domain.user;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Role {
    ROLE_SALE_MAN("Sales Man"),
    ROLE_ADMIN("Admin"),
    ROLE_SUPER_ADMIN("Super Admin");

    private final String name;

    Role(String name) {
        this.name = name;
    }

    @JsonValue
    public String getName() {
        return name;
    }
}
