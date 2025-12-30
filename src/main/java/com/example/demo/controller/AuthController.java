package com.example.demo.controller;

import com.example.demo.domain.enumtype.Role;
import com.example.demo.service.impl.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    /**
     * Register a new user
     *
     * @param name the name of the user
     * @param email the email of the user
     * @param password the password of the user
     * @param role the role of the user
     * @return a token for the user
     */
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestParam String name,
                                      @RequestParam String email,
                                      @RequestParam String password,
                                      @RequestParam Role role) {
        String token = authService.register(name, email, password, role);
        return ResponseEntity.ok().body("{\"token\": \"" + token + "\"}");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email,
                                   @RequestParam String password) {
        String token = authService.login(email, password);
        return ResponseEntity.ok().body("{\"token\": \"" + token + "\"}");
    }

    @GetMapping("/test/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminOnly() {
        return "Welcome Admin!";
    }
}
