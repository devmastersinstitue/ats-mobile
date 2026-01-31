package com.example.demo.service.impl;

import com.example.demo.domain.user.Role;
import com.example.demo.domain.user.User;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepo;
    private final JwtService jwtService;

    public String register(String name, String email, String password, Role role) {
        if (userRepo.existsByEmail(email)) throw new RuntimeException("Email already exists");
        User user = User.builder()
                .id(UUID.randomUUID())
                .username(name)
                .email(email)
                .password(password)
                .role(role)
                .build();
        userRepo.save(user);
        return jwtService.generateToken(user.getEmail(), user.getRole().name());
    }
}
