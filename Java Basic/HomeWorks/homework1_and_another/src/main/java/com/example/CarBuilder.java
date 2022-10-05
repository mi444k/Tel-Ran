package com.example;

public class CarBuilder {
    private String color = "";
    private int hP = 0;
    private String owner = "";
    
    public CarBuilder() { }

    public Car buildCar() {
        return new Car(this.color, this.hP, this.owner);
    }
    
    public CarBuilder color(String color)
    {
        this.color = color;
        return this;
    }

    public CarBuilder owner(String owner)
    {
        this.owner = owner;
        return this;
    }

    public CarBuilder power(int power)
    {
        this.hP = power;
        return this;
    }
}
