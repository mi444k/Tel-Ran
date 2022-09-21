package org.example;

public class Main {
    public static void main(String[] args) {
        char v_char = 'G';
        byte v_byte = 4;
        short v_short = 56;
        float v_float = 4.7333436f;
        double v_double = 4.355453532;
        long v_long = 12121L;

        int v_base = 365;
        int hundreds = v_base / 100;
        int tens = v_base % 100 / 10;
        int units = v_base % 100 % 10;

        System.out.printf("\nchar: %s", v_char);
        System.out.printf("\nbyte: %s", v_byte);
        System.out.printf("\nshort: %s", v_short);
        System.out.printf("\nfloat: %s", v_float);
        System.out.printf("\ndouble: %s", v_double);
        System.out.printf("\nlong: %s", v_long);

        System.out.printf("\n" +
                "\nHundreds: " + hundreds +
                "\nTens: " + tens +
                "\nUnits: " + units
        );
    }
}