package com.example.demo.domain;


public class Human {
    private String name;
    private Address address;
    private String cnic;
    private String contactNo;
    private String gender;
    int age;

    public Human(){

    }

    public Human(String name, Address address) {
        this.name = name;
        this.address = address;
    }

    public Human(String name, String cnic, String contactNo, String gender, int age, Address address) {
        this.name = name;
        this.cnic = cnic;
        this.contactNo = contactNo;
        this.gender = gender;
        this.age = age;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public String getCnic() {
        return cnic;
    }

    public String getContactNo() {
        return contactNo;
    }

    public String getGender() {
        return gender;
    }

    public int getAge() {
        return age;
    }

    public Address getAddress() {
        return address;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public void setCnic(String cnic) {
        this.cnic = cnic;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
