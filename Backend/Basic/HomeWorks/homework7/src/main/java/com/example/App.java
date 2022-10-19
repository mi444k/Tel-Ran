package com.example;

import java.util.Arrays;
import java.util.Scanner;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.DayOfWeek;
import java.time.temporal.ChronoField;

public class App {
    private static boolean todayIsWeekend(LocalDate date) {
        DayOfWeek day = DayOfWeek.of(date.get(ChronoField.DAY_OF_WEEK));
        return day == DayOfWeek.SUNDAY || day == DayOfWeek.SATURDAY;
    }

    public static void main(String[] args) {
        String[] yesValues = { "yes", "y", "ja", "j", "да", "да" };
        boolean isWeekend = false;
        boolean isRain = false;
        LocalDate date;
        Scanner keyboard = new Scanner(System.in);

        System.out.print("Enter date (DD.MM.YYYY) or leave empty for today: ");
        String rawDate = keyboard.nextLine();
        if (rawDate != "") {
            date = LocalDate.parse(rawDate, DateTimeFormatter.ofPattern("dd.MM.yyyy"));
        } else {
            date = LocalDate.now();
        }
        isWeekend = todayIsWeekend(date);

        System.out.print("Is it raining today (Yes / No (default))?: ");
        String rawRain = keyboard.nextLine();
        isRain = rawRain == "" ? false : Arrays.asList(yesValues).contains(rawRain.toLowerCase());

        boolean canWalk = isWeekend && !isRain ? true : false;

        System.out.println("You can" + (canWalk ? "" : "'t") + " walk today.");

        keyboard.close();
    }
}
