package com.example.demo.Transformer;

import com.example.demo.domain.Root;
import com.example.demo.model.RootModel;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class RootTransformer {

    public Root toEntity(RootModel model) {
        if (model != null)
            return Root.builder()
                    .id(UUID.randomUUID())
                    .name(model.getName())
                    .isActive(true)
                    .build();
        return null;
    }

    public RootModel toModel(Root root) {
        if (root != null)
            return RootModel.builder()
                    .id(root.getId())
                    .name(root.getName())
                    .isActive(root.isActive())
                    .build();
        return null;
    }

    public List<RootModel> toModelList(List<Root> allRoot) {
        return allRoot.stream().map(this::toModel).toList();
    }
}
