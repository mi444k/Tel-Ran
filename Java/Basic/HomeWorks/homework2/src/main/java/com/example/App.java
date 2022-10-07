package com.example;

import java.util.*;

public class App 
{
    public static String dischargeToDec( String value, int discharge ) 
    {
        Dictionary<Character, Integer> hexChars = new Hashtable<Character, Integer>();
        hexChars.put('a', 10);
        hexChars.put('b', 11);
        hexChars.put('c', 12);
        hexChars.put('d', 13);
        hexChars.put('e', 14);
        hexChars.put('f', 15);

        String _value = value;
        if (_value.substring(0, 2).toLowerCase().equals("0x")) {
            _value = value.substring(2, _value.length());
        }
        // if (!_value.matches("^([A-Fa-f0-9]*)$")) {
        //     return "Value " + value + " has invalid format. HEX is expected.";
        // }
        int result = 0;
        int d;
        for (int i = 0; i < _value.length(); i++) {
            try {
                d = hexChars.get(Character.toLowerCase(_value.charAt(i)));
            }
            catch (Exception e) {
                d = (int) Character.getNumericValue(_value.charAt(i));
            }
            result += (d * Math.pow(discharge, _value.length() - i - 1));
        }
        return String.valueOf(result);
    }

    public static Dictionary decomposeDec( int value ) {
        String s = Integer.toString(value);
        Dictionary<Integer, Character> discharges = new Hashtable<Integer, Character>();

        for (int i = 0; i < s.length(); i++) {
            discharges.put((int) Math.pow(10, s.length() - i - 1), s.charAt(i));
        }
        return discharges;
    }

    private static String decToDischarge( int value, int discharge ) {
        Dictionary<String, String> hexValue = new Hashtable<String, String>();
        hexValue.put("10", "A");
        hexValue.put("11", "B");
        hexValue.put("12", "C");
        hexValue.put("13", "D");
        hexValue.put("14", "E");
        hexValue.put("15", "F");

        int full = value;
        int leftover;
        String result = "";
        String leftoverToAdd = "";
        while (full >= discharge) {
            leftover = full % discharge;
            full = full / discharge;
            leftoverToAdd = Integer.toString(leftover);
            if (leftover >= 10) {
                leftoverToAdd = hexValue.get(Integer.toString(leftover));
            }
            result = leftoverToAdd + result;
        }
        result = full + result;
        if (discharge == 16) {
            result = "0x" + result;
        } else if (discharge == 2) {
            result = "b" + result;
        }
        return result;
    }

    public static void main( String[] args )
    {
        int task_0_hex_to_dec = 478;
        int task_1_to_digit = 200345;
        int task_2_dec_to_hex = 637;
        int task_3_dec_to_bin = 637;
        int task_4_bin_to_dec = 11100111;
        int task_5_dec_to_trinity = 637;

        // Task 0:
        System.out.println("Task 0: HEX 0x" + task_0_hex_to_dec + " = DEC " + dischargeToDec(Integer.toString(task_0_hex_to_dec), 16));

        // Task 1:
        System.out.println("Task 1: DEC " + task_1_to_digit + " has " + decomposeDec(task_1_to_digit));

        // Task 2:
        String t2_in_hex = decToDischarge(task_2_dec_to_hex, 16);
        String t2_hex_in_dec = dischargeToDec(t2_in_hex, 16);
        System.out.println("Task 2: DEC " + task_2_dec_to_hex + " = HEX " + t2_in_hex + " = DEC " + t2_hex_in_dec);

        // Task 3:
        System.out.println("Task 3: DEC " + task_3_dec_to_bin + " = BIN " + decToDischarge(task_3_dec_to_bin, 2));

        // Task 4:
        System.out.println("Task 4: BIN " + task_4_bin_to_dec + " = DEC " + dischargeToDec(Integer.toString(task_4_bin_to_dec), 2));

        // Task 5:
        System.out.println("Task 5: DEC " + task_5_dec_to_trinity + " = TRINITY " + decToDischarge(task_5_dec_to_trinity, 3));

    }
}
