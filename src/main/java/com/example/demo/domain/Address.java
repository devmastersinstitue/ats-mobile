package com.example.demo.domain;

public class Address {
    private String country;
    private String city;
    private String houseNo;

    public Address(String country, String city, String houseNo) {
        this.country = country;
        this.city = city;
        this.houseNo = houseNo;
    }

    public String getCountry() {
        return country;
    }

    public String getCity() {
        return city;
    }

    public String getHouseNo() {
        return houseNo;
    }

    public String getCompleteAddress() {
        return "Country : " + country + ", City : " + city + ", House Number : " + houseNo;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setHouseNo(String houseNo) {
        this.houseNo = houseNo;
    }
}
