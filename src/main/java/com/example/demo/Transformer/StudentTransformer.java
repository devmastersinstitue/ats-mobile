package com.example.demo.Transformer;

import com.example.demo.domain.Student;
import com.example.demo.model.StudentModel;
import org.springframework.stereotype.Component;

@Component
public class StudentTransformer {
    public StudentModel toModel(Student entity){
        if(entity == null){
            return null;
        }else {
            return new StudentModel(entity.getId(), entity.getHuman().getName(), entity.getHuman().getAge(), entity.getHuman().getAddress().getCompleteAddress());
        }
    }

}
