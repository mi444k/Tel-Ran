package main.java;

import java.util.Arrays;

public class App {
  public static void main(String[] args) {
    int[] arr = new int[15];
    for (int i = 0; i < arr.length; i++)
      arr[i] = (int) (Math.random() * 10);

    System.out.println(Arrays.toString(arr));

    int counter = 0;
    for (int i = 0; i < arr.length; i++)
      if (arr[i] != 0 && arr[i] % 2 == 0)
        counter += 1;

    System.out.println(counter);

  }
}
