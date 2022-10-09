package com.example;

import com.example.game.hero.Elf4;

public class App 
{
    public static void main( String[] args )
    {
        Elf4 hero = new Elf4(1, "Noname");
        hero.setNickname("Rolfdran");

        System.out.println("Hero with nickname \"" + hero.getNickname() + "\" has iD " + hero.getId());
    }
}
