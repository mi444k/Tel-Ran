package com.example;

public class Calc {
    private double firstNumber;
    private double secondNumber;

    public Calc(double firstNumber, double secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    public double Add() {
        return firstNumber + secondNumber;
    }

    public double Sub() {
        return firstNumber - secondNumber;
    }

    public double Div() {
        return firstNumber / secondNumber;
    }

    public void Result() {
        System.out.println(firstNumber + " + " + secondNumber + " = " + Add());
        System.out.println(firstNumber + " - " + secondNumber + " = " + Sub());
        System.out.println(firstNumber + " / " + secondNumber + " = " + Div());
    }

}
