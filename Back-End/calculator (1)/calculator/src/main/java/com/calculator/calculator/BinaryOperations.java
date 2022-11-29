package com.calculator.calculator;

import java.util.Objects;

public class BinaryOperations {
    public float add(String num1, String num2){
        return Float.parseFloat(num1) + Float.parseFloat(num2);
    }
    public float subtract(String num1, String num2){
        return Float.parseFloat(num1) - Float.parseFloat(num2);
    }
    public float multiply(String num1, String num2){
        return Float.parseFloat(num1) *Float.parseFloat(num2);
    }
    public float divide(String num1, String num2){return Float.parseFloat(num1) /Float.parseFloat(num2);}
    public String result(String operation, String num1 , String num2){
        if(Objects.equals(operation, "+")){
            return String.valueOf(add(num1,num2));
        }
        if(Objects.equals(operation, "-")){
            return String.valueOf(subtract(num1,num2));
        }
        if(Objects.equals(operation, "x")){
            return String.valueOf(multiply(num1,num2));
        }
        if(Objects.equals(operation, "÷")){
            return String.valueOf(divide(num1,num2));
        }
       return null;
    }

}
