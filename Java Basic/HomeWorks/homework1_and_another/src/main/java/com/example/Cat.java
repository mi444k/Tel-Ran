package com.example;

public class Cat {
    private int age;
    private String name;
    private String owner;

    // Конструктор можно вызвать только один раз, но из него можно вызвать другой конструктор.
    // Под каждый вариант создания класса надо сделать отдельный конструктор. 
    // Дефолтных значений указывать нелья.
    // Два конструктора с одинаковым набором типов данных быть не может.
    // Явно указать какую переменную мы передаем при создании класса нельзя.

    public Cat() {
        System.out.println("Hello, this is cat.");
    }

    public Cat(int age) {
        this.age = age;
        System.out.println("Age is " + this.age);
    }

    public Cat(String name) {
        this.name = name;
        System.out.println("Name is " + this.age);
    }

    public Cat(int age, String name, String owner) {
        this(age);  // Вывзов другого конструктора можно использовать только один раз.
        this.owner = owner;
        System.out.println("Owner: " + this.owner);
    }

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }
}
