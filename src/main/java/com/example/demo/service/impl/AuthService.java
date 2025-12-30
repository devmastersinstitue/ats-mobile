package com.example.demo.service.impl;

import com.devmasters.ems.domain.User;
import com.devmasters.ems.repository.UserRepository;
import com.example.demo.domain.enumtype.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public String register(String name, String email, String password, Role role) {
        if (userRepo.existsByEmail(email)) throw new RuntimeException("Email already exists");
        User user = User.builder()
                .id(UUID.randomUUID())
                .username(name)
                .email(email)
                .password(passwordEncoder.encode(password))
                .role(role)
                .build();
        userRepo.save(user);
        return jwtService.generateToken(user.getEmail(), user.getRole().name());
    }

    public String login(String email, String password) {
        Optional<User> userOpt = userRepo.findByEmail(email);
        if (userOpt.isEmpty()) throw new RuntimeException("User not found");
        User user = userOpt.get();
        if (!passwordEncoder.matches(password, user.getPassword()))
            throw new RuntimeException("Invalid credentials");
        return jwtService.generateToken(user.getEmail(), user.getRole().name());
    }
}
