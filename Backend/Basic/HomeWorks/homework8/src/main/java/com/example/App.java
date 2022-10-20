package com.example;

public class App {
    public static void main(String[] args) {

        int a = 3;

        switch (a) {
            case 1:
                System.out.println(1);
                break;
            case 2:
                System.out.println(2);
                break;
            case 3:
                System.out.println(3);
                break;
            case 4:
                System.out.println(4);
                break;
        }

        if (a == 1) {
            System.out.println(1);
        } else if (a == 2) {
            System.out.println(2);
        } else if (a == 3) {
            System.out.println(3);
        } else if (a == 4) {
            System.out.println(4);
        }

    }
}
