package com.example;

public class Main {
    public static void main(String[] args) {
    }

    static void example_extra1_builder() {
        System.out.println(new CarBuilder().buildCar());

        Car mycar = new CarBuilder()
                    .color("black")
                    .owner("Martis")
                    .power(150)
                    .buildCar();
        System.out.println(mycar);
    }

    static void example_hw_20220921() {
        char v_char = 'G';
        byte v_byte = 4;
        short v_short = 56;
        float v_float = 4.7333436f;
        double v_double = 4.355453532;
        long v_long = 12121L;

        int v_base = 365;
        int hundreds = v_base / 100;
        int tens = v_base % 100 / 10;
        int units = v_base % 10;

        System.out.printf("\nchar: %s", v_char);
        System.out.printf("\nbyte: %s", v_byte);
        System.out.printf("\nshort: %s", v_short);
        System.out.printf("\nfloat: %s", v_float);
        System.out.printf("\ndouble: %s", v_double);
        System.out.printf("\nlong: %s", v_long);

        System.out.printf("\n" +
                "\nBase value: " + v_base +
                "\nHundreds: " + hundreds +
                "\nTens: " + tens +
                "\nUnits: " + units
        );
    }
    
    static void example_hw_20221005() {
        Cat cat = new Cat(11, "Bob", "Morley");
        System.out.println(cat);
    }
}