package com.calculator.calculator;

import org.springframework.web.bind.annotation.*;
import java.util.Objects;

@RestController
@CrossOrigin(origins="http://localhost:4200/")

public class controller {
    @PostMapping (value = "/result/{first}/{second}/{third}")

    public String calc(@PathVariable String first, @PathVariable String second,@PathVariable String third) {
       if(Objects.equals(first, "+") || Objects.equals(first, "-") || Objects.equals(first, "x") || Objects.equals(first, "÷")){
           BinaryOperations Binary = new BinaryOperations();
           return Binary.result(first,second,third);
        }else{
           UniaryOperations un = new UniaryOperations();
           return un.result(first,second);
       }
    }
}
