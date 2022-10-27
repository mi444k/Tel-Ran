package com.example;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        System.out.print("Enter your number: ");
        int maxNumber = keyboard.nextInt();
        keyboard.close();
        int result = 0;
        for (int i = 1; i <= maxNumber; i++) {
            result += i;
        }
        System.out.println("The sum of the numbers from 1 to " + maxNumber + " is equal to: " + result);
    }
}
