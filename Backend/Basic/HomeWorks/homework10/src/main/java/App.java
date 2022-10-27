package main.java;

public class App {
    static int maxFloors = 163;
    static int totalFloorsUp = 5 - 1;

    private static int withFor() {
        int result = 0;

        for (int floor = 1; floor < 200; floor += totalFloorsUp) {
            if (floor >= maxFloors) {
                break;
            }
            result++;
        }
        return result;
    }

    private static int withWhile() {
        int result = 0;
        int floor = 1;
        while (floor < maxFloors) {
            result++;
            floor += totalFloorsUp;
        }
        return result;
    }

    private static int withDoWhile() {
        int result = 0;
        int floor = 1;
        do {
            result++;
            floor += totalFloorsUp;
        } while (floor < maxFloors);
        return result;
    }

    public static void main(String[] args) {
        System.out.println(withFor());
        System.out.println(withWhile());
        System.out.println(withDoWhile());
    }
}
