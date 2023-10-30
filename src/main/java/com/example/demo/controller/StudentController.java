package com.example.demo.controller;

import com.example.demo.domain.Student;
import com.example.demo.model.StudentModel;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "student")
public class StudentController {
   StudentService studentService ;

   @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/list")
    public List<Student> students() {
        return studentService.getAllStudents();
    }

    @GetMapping("/create")
    public void createStudents(){
        List<Student> students = studentService.createStudentList();
//        studentService.save(students);
    }

    @GetMapping("/list/{age}")
    public List<StudentModel> getStudentListAgeGreaterThenTwenty(@PathVariable int age){
        return studentService.getStudentListGreaterThenAge(age);
    }

//    GetMapping("/books/{studentName}")
//    public String getStudentListWithBookName(@PathVariable String studentName){
//        List<Student> studentLists = studentService.createStudentList();
//        return studentService.getStudentListWithBookName(studentLists,studentName);
//    }@
}
