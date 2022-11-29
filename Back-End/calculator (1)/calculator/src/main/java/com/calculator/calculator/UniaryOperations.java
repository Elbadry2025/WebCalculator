package com.calculator.calculator;
import java.lang.Math;
import java.util.Objects;

public class UniaryOperations {
    public double percentage(String num1){
        return Float.parseFloat(num1)/100.0 ;
    }
    public float resiprocal(String num1){
        return 1/(Float.parseFloat(num1));
    }
    public float square(String num1){
        return Float.parseFloat(num1) *Float.parseFloat(num1);
    }
    public double root(String num1){
        return Math.sqrt(Float.parseFloat(num1)) ;
    }
    public float invertSign(String num1){
        return Float.parseFloat(num1)*-1 ;
    }
    public String result(String operation, String num1){
        if(Objects.equals(operation, "٪")){
            return String.valueOf(percentage(num1));
        }
        if(Objects.equals(operation, "x^-1")){
            return String.valueOf(resiprocal(num1));
        }
        if(Objects.equals(operation, "X²")){
            return String.valueOf(square(num1));
        }
        if(Objects.equals(operation, "√x")){
            return String.valueOf(root(num1));
        }
        if(Objects.equals(operation, "±")){
            return String.valueOf(invertSign(num1));
        }

        return null;
    }
}
