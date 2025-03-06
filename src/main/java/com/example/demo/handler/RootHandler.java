package com.example.demo.handler;

import com.example.demo.Transformer.RootTransformer;
import com.example.demo.model.RootModel;
import com.example.demo.service.RootService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class RootHandler {
    private final RootTransformer rootTransformer;
    private final RootService rootService;

    public RootModel create(RootModel rootModel) {
        return rootTransformer.toModel(rootService.create(rootTransformer.toEntity(rootModel)));
    }

    public List<RootModel> getAllRoot() {
        return rootTransformer.toModelList(rootService.getAllRoot());
    }
}
