package com.example.demo.service;

import com.example.demo.domain.Root;
import com.example.demo.repository.RootRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RootService {
    private final RootRepository rootRepository;

    public Root create(Root root) {
        rootRepository.save(root);
        return root;
    }

    public List<Root> getAllRoot() {
        return rootRepository.findAll();
    }
}
