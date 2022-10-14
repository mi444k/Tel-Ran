package com.example;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        String currentTime;
        int STARTATH = 9;
        int ENDATH = 17;
        int h;
        int m;
        Scanner keyboard = new Scanner(System.in);

        while (true) {
            System.out.print("Enter current time in format \"HH:MM\": ");
            currentTime = keyboard.nextLine();
            String[] time = currentTime.split(":");
            h = Integer.parseInt(time[0]);
            m = Integer.parseInt(time[1]);
            if ((h >= 0 && h < 24) && (m >= 0 && m < 60)) {
                break;
            }
            System.out.println("Error: You enter wrong time!\n");
        }
        keyboard.close();

        System.out.println("Time: " + h + ":" + m);

        if (h >= ENDATH) {
            System.out.println("The working day is already over. Next work day start tomorow at " + STARTATH + ":00.");
        } else if (h < STARTATH) {
            int waitMinutes = 0;
            int waitHours = STARTATH - h;
            if (m > 0) {
                waitHours -= 1;
                waitMinutes = 60 - m;
            }
            System.out.println(
                    "The working day will start at " + STARTATH + ":00. Wait " + waitHours + " hours " + waitMinutes
                            + " minutes.");
        } else {
            int leftHours = ENDATH - h;
            int leftMinutes = 0;
            if (m > 0) {
                leftHours -= 1;
                leftMinutes = 60 - m;
            }
            System.out.println(
                    "Left in Hours: " + Math.round((float) (leftHours * 60 + leftMinutes) / 60 * 100.0) / 100.0);
            System.out.println("Left in Minutes: " + (leftHours * 60 + leftMinutes));
            System.out.println("Left in Minutes: " + (leftHours * 60 + leftMinutes) * 60);
        }
    }
}
