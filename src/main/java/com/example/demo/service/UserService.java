package com.example.demo.service;

import com.example.demo.domain.user.User;

public interface UserService {

    User findByEmailAndPassword(String email, String password);
}
