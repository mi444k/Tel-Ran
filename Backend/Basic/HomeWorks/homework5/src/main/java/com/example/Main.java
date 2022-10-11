package com.example;

public final class Main {
    private Main() {
    }

    public static void main(String[] args) {
        System.out.println("\n\nFirst part of HomeWork:");
        homeWorkFirstPart();

        System.out.println("\n\nSecond part of HomeWork:");
        Calc calc = new Calc(100, 200);
        calc.Result();

        System.out.println("\n\nThird part of HomeWork:");
        double amountEUR = 1000;
        double rate = 0.965;
        Exchange exch = new Exchange(amountEUR, rate);
        System.out.println(amountEUR + " EUR = " + exch.Convert() + " USD");
    }

    private static void homeWorkFirstPart() {
        Word word = new Word();
        System.out.println(word.getString());
        word.getWord();
        System.out.println("Yout enter word: " + word.getString());
        System.out.println("First part is: " + word.getFirtPart());
        System.out.println("Second part is: " + word.getSecondPart());
    }
}
