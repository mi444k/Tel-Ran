package main.java;

import java.util.Arrays;
// import java.util.Random;

public class App {

  static int getNumbersOfWord(String str) {
    str = str.replaceAll("[.,]", " ");
    return str.split("(\s+)").length;
  }

  public static void main(String[] args) {
    // int[] arr = new int[8];
    // // Random r = new Random();
    // for (int i = 0; i < arr.length; i++) {
    // // arr[i] = r.nextInt(1, 11);
    // arr[i] = (int) (Math.random() * 10) + 1;
    // }
    // System.out.println(Arrays.toString(arr));

    // for (int i = 1; i <= arr.length; i += 2)
    // arr[i] = 0;

    // System.out.println(Arrays.toString(arr));

    String s = "asdas asdas fas sdfadsm sdfsadfsdaf   asdfsdfs sdf sadf sdf";
    System.out.println(getNumbersOfWord(s));

  }
}
