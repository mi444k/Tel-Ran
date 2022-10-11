package com.example;

public class Exchange {
    private double rate;
    private double amount;

    public Exchange(double amount, double rate) {
        this.amount = amount;
        this.rate = rate;
    }

    public double Convert() {
        // Math.round(N * 100.0) / 100.0 - Rounds the number to 2 decimal places
        return Math.round(amount * rate * 100.0) / 100.0;
    }

}
