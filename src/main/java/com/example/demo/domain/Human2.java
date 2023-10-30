package com.example.demo.domain;


public class Human2 {
    private String name;
    private String fatherName;
    private int age;

    public Human2(String name, String fatherName, int age) {
        this.name = name;
        this.fatherName = fatherName;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String display(){
        return "My name is " + name + " and  my father name is " + fatherName + " and my age is " + age + ".";
    }
}
