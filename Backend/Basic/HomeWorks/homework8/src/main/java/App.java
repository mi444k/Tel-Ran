
package main.java;

import java.util.Scanner;

public class App {

    String espresso() {
        return "эспрессо";
    }

    String water() {
        return "вода";
    }

    String milk() {
        return "молоко";
    }

    String shake() {
        return "вспененное";
    }

    String selectTea() {
        return "чайный пакетик";
    }

    String getCoffee(int button) {
        String process;
        switch (button) {
            case 1 -> process = "Приготовление Espresso: " + espresso();
            case 2 -> process = "Приготовление Americano: " + espresso() + " + " + water();
            case 3 -> process = "Приготовление Capuchino: " + espresso() + " + " + milk();
            case 4 -> process = "Приготовление Latte: " + espresso() + " + " + shake() + " " + milk();
            case 5 -> process = "Приготовление Tea: " + selectTea() + " + " + water();
            default -> process = "";
        }
        return process;
    }

    public static void main(String[] args) {
        App hw2 = new App();
        Scanner scanner = new Scanner(System.in);

        String result = "";
        while (result == "") {
            System.out.println("Выберете напиток:");
            System.out.println(" |- 1) Espresso");
            System.out.println(" |- 2) Americano");
            System.out.println(" |- 3) Capuchino");
            System.out.println(" |- 4) Latte");
            System.out.println(" |- 5) Tea");
            System.out.print(": ");
            result = hw2.getCoffee(scanner.nextInt());
        }
        System.out.println(result);
        scanner.close();
    }
}
