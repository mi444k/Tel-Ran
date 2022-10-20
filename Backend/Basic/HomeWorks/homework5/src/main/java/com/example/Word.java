package com.example;

import java.util.Scanner;

public class Word {
    private String string = "";

    private String checkWord() {
        String err = "";
        if (string == "") {
            err = "Error: String is empty.";
        } else if (string.length() % 2 != 0) {
            err = "Error: Your word \"" + string + "\" consists of an odd (" + string.length()
                    + ") number of characters.";
        }
        return err;
    }

    public void getWord() {
        Scanner keyboard = new Scanner(System.in);
        while (true) {
            System.out.print("Enter a word with an even number of letters: ");
            string = keyboard.next();
            String err = checkWord();
            if (err != "") {
                System.out.println(err + " Try again.");
                continue;
            }
            break;
        }
        keyboard.close();
    }

    public String getString() {
        String err = checkWord();
        if (err != "") {
            return err;
        }
        return string;
    }

    public String getFirtPart() {
        String err = checkWord();
        if (err != "") {
            return err;
        }
        return string.substring(0, string.length() / 2);
    }

    public String getSecondPart() {
        String err = checkWord();
        if (err != "") {
            return err;
        }
        return string.substring(string.length() / 2);
    }

}
