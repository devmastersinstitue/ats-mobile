package com.example.demo.controller;

import com.example.demo.domain.user.User;
import com.example.demo.model.JwtResponse;
import com.example.demo.model.LoginRequest;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;

    @PostMapping("/signin")
    public JwtResponse authenticateUser(@RequestBody LoginRequest loginRequest) {
        User user = userService.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
        return user != null ? new JwtResponse(user.getId().toString(), user.getFirstName(), user.getEmail(), user.getRole()) : null;
    }
}
