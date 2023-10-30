package com.example.demo.service;

import com.example.demo.Transformer.StudentTransformer;
import com.example.demo.domain.Address;
import com.example.demo.domain.Book;
import com.example.demo.domain.Human;
import com.example.demo.domain.Student;
import com.example.demo.model.StudentModel;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.UUIDEditor;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    StudentTransformer studentTransformer = new StudentTransformer();
//    BookService bookService = new BookService();


    public List<Student> createStudentList() {
        List<Student> students = new ArrayList<>();
        students.add(new Student(UUID.randomUUID(), 3000,
                new LinkedList<Integer>() {
                    {
                        add(1);
                    }

                    {
                        add(2);
                    }

                    {
                        add(3);
                    }
                },
                new Human("Alishba", "9837489355-ww4-2", "030330389444", "female", 50, new Address("Pak", "Bwp", "147"))));

        students.add(new Student(UUID.randomUUID(), 2000,
                new LinkedList<Integer>() {
                    {
                        add(4);
                    }

                    {
                        add(5);
                    }

                    {
                        add(13);
                    }
                },
                new Human("Alina", "9837434355-ww4-2", "030334589444", "female", 25, new Address("Pakistan", "Ape", "1"))));

        students.add(new Student(UUID.randomUUID(), 1000,
                new LinkedList<Integer>() {
                    {
                        add(11);
                    }

                    {
                        add(12);
                    }

                    {
                        add(18);
                    }
                },
                new Human("Noreen", "9822489355-ww4-2", "032330389444", "female", 20, new Address("Pakistan", "Ahmad Pur East", "3"))));

        students.add(new Student(UUID.randomUUID(), 1000,
                new LinkedList<Integer>() {
                    {
                        add(11);
                    }

                    {
                        add(1);
                    }

                    {
                        add(15);
                    }
                },
                new Human("Ali", "982248935-ww4-2", "032330389444", "male", 20, new Address("Pak", "Bwp", "4"))));

        students.add(new Student(UUID.randomUUID(), 1000,
                new LinkedList<Integer>() {
                    {
                        add(1);
                    }

                    {
                        add(6);
                    }

                    {
                        add(8);
                    }
                },
                new Human("Noreen", "9822489355-ww4-2", "032330389444", "female", 20, new Address("India", "Ahmad Pur East", "5"))));


        students.add(new Student(UUID.randomUUID(), 1000,
                new LinkedList<Integer>() {
                    {
                        add(1);
                    }

                    {
                        add(2);
                    }

                    {
                        add(9);
                    }
                },
                new Human("Alina", "9822489355-ww4-2", "032330389444", "female", 20, new Address("India", "Ape", "3"))));

        students.add(new Student(UUID.randomUUID(), 1000,
                new LinkedList<Integer>() {
                    {
                        add(11);
                    }

                    {
                        add(12);
                    }

                    {
                        add(18);
                    }
                },
                new Human("Alishba", "9822489355-ww4-2", "032330389444", "female", 21, new Address("Pakistan", "Bwp", "5"))));

        students.add(new Student(UUID.randomUUID(), 1000,
                new LinkedList<Integer>() {
                    {
                        add(10);
                    }

                    {
                        add(9);
                    }

                    {
                        add(18);
                    }
                },
                new Human("Noreen", "9822489355-ww4-2", "032330389444", "female", 20, new Address("Pakistan", "Ape", "3"))));

        students.add(new Student(UUID.randomUUID(), 1000,
                new LinkedList<Integer>() {
                    {
                        add(19);
                    }

                    {
                        add(12);
                    }

                    {
                        add(7);
                    }
                },
                new Human("Danish", "9822489355-ww4-2", "032330389444", "male", 23, new Address("Pak", "Ahmad Pur East", "3"))));

        students.add(new Student(UUID.randomUUID(), 1000,
                new LinkedList<Integer>() {
                    {
                        add(11);
                    }

                    {
                        add(15);
                    }

                    {
                        add(13);
                    }
                },
                new Human("Danish", "9822489355-ww4-2", "032330389444", "male", 23, new Address("India", "Ahmad Pur East", "3"))));
        return students;
    }

    public List<StudentModel> getStudentListGreaterThenAge(int age) {
        List<Student> studentList = studentRepository.findAllByHuman_Age(age);
//        List<Student> studentList = new ArrayList<>();
//        for (Student student : students) {
//            if (student.getHuman().getAge() > age) {
//                studentList.add(student);
//            }
//        }
        List<StudentModel> studentModels = new ArrayList<>();
        for (Student student : studentList) {
            studentModels.add(studentTransformer.toModel(student));

        }
        return studentModels;
    }

//    public String getStudentListWithBookName(List<Student> studentLists, String studentName) {
//        for (Student student : studentLists) {
//            if (student.getHuman().getName().equals(studentName)) {
//                List<Book> books = bookService.createBookList();
//                String bookNames = "";
//                for (Book book : books) {
//                    for (UUID bookId : student.getBooksIds()) {
//                        if (book.getId() == bookId) {
//                            if (!bookNames.equals("")) {
//                                bookNames += ",";
//                            }
//                            bookNames += book.getName();
//                            break;
//                        }
//                    }
//                }
//                bookNames += ".";
//                return bookNames;
//            }
//        }
//        return "Student cannot exist in our system.";
//    }

    public void save(List<Student> students) {
        studentRepository.saveAll(students);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}












