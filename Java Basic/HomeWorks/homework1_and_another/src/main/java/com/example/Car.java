package com.example;

public class Car {
    private String color;
    private int power;
    private String owner;

    public Car(String color, int power, String owner) {
        this.color = color;
        this.power = power;
        this.owner = owner;
    }

    public String toString() {
        String ownerText = "car owned by " + this.owner + ".";
        if (this.owner == "") {
            ownerText = "car has no owner.";
        }
        if (this.color == "" || this.power <= 0) {
            return "You have no car.";
        } else {
            return "This is " + this.color + " car with " + this.power + " horse power and " + ownerText;
        }
    }
}
