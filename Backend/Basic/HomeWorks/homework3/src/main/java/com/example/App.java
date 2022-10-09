package com.example;

import java.util.Scanner;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println("\n--- HomeWork 28.09.2022 part #1 ---\n");
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Hello! What is your name?: ");
        String name = keyboard.nextLine();
        System.out.println("Hello " + name + "!");

        System.out.print("What is the radius of the circle?: ");
        int radius = keyboard.nextInt();
        double area = 3.14 * Math.pow(radius, 2);
        System.out.println("The area of a circle with radius " + area);

        keyboard.close();

        System.out.println("\n--- HomeWork 28.09.2022 part #2 ---\n");

        String text = new String("I study Basic Java!");
        System.out.println("I have a string: \"" + text + "\"");
        System.out.println("And last text char is: \"" + text.charAt(text.length() - 1) + "\"");
        System.out.println("But now I want to make a joke: \"" + text.replace("a", "*") + "\"");

        System.out.println("\n--- HomeWork 28.09.2022 done! ---\n");
    }
}
