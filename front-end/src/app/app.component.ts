import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



const httpOptions : object = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json',
    Authorization : 'my-auth-token'
  }), responseType : 'string'
};



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient){}
  title = 'my-first-app';
  exp : string ='';
  result: string = '';
  operand1: string='';
  operand2: string='';
  operator: string='';
  mainOperator: string='';
  temp : string='';
  creat(){
    this.http.post<string>(`http://localhost:8080/result/${this.mainOperator}/${this.operand1}/${this.operand2}`, JSON, httpOptions)
      .subscribe(result => {
        this.result = result.toString();}
      )
  }
  pressNum(num:string){
    this.result = this.result + num;
    this.exp = this.exp + num;
  }
  allclear(){
    this.result="";
    this.exp="";
    this.operand1='';
    this.operand2='';
    this.operator='';
    this.mainOperator='';
  }
  pressOperator(op:string){
    if(op=='-' && this.result == '' && this.operand1 == ''){  //for inserting a negative number
      this.result= op ;
      this.exp = this.exp + op;
      return
    }else if(op=='-' && this.result == '' && this.operand1 != '' && this.operand2 == ''){
      this.result = op;
      this.exp = this.exp + op;
      return;
    }
    if(this.mainOperator != ''){          //to perform multiple operations in a single statement
      if(op == 'x^-1' || op == 'X²' || op == '√x' || op == '±' || op == '٪' ){
        this.http.post<string>(`http://localhost:8080/result/${op}/${this.result}/${'0'}`, JSON, httpOptions)
        .subscribe(result => {
          this.operand2 = result.toString();
          this.result = this.operand2;
        }
        )
      }
      else{
      this.operand2 = this.result;
      this.http.post<string>(`http://localhost:8080/result/${this.mainOperator}/${this.operand1}/${this.operand2}`, JSON, httpOptions)
      .subscribe(result => {
        this.operand1 = result.toString();}
      )
      this.result = '';
      this.operand2='';
      }
    }
    if(this.operand1 == ''){
      this.operand1 = this.result;
      this.temp = this.operand1;
    }else{
      this.operand2 = this.result;
      this.temp = this.operand2;
    }
    if(op == 'x^-1' || op == 'X²' || op == '√x' || op == '±' || op == '٪'){
      this.operator= op;
    }else{
      this.mainOperator = op ;
      this.operator= op;
    }
    this.result='';
    if(this.operator == '√x'){          //for showing the experession in a good format
      this.exp = this.exp.slice(0,-this.temp.length);
      this.exp = this.exp + "root("+ this.temp + ')';
     
    }else if(this.operator == 'X²'){
      this.exp = this.exp.slice(0,-this.temp.length);
      this.exp = this.exp + "square("+ this.temp + ')';
     
    }else if(this.operator == 'x^-1'){
      this.exp = this.exp.slice(0,-this.temp.length);
      this.exp = this.exp + "1/("+ this.temp + ')';
     
    }else if(this.operator == '±'){
      this.exp = this.exp.slice(0,-this.temp.length);
      this.exp = this.exp + "-("+ this.temp + ')';
     
    }
    else{
      this.exp = this.exp + op;
    }
    //for handling inserting a uniray operator for the first operand in the expression
    if(this.operator == 'x^-1' || this.operator == 'X²' || this.operator == '√x' || this.operator == '±' || this.operator == '٪' ){
      
      if(this.mainOperator == ''){
        this.http.post<string>(`http://localhost:8080/result/${this.operator}/${this.operand1}/${'0'}`, JSON, httpOptions)
        .subscribe(result => {
          this.result = result.toString();
          this.operand1 = this.result;
         
        }
        )
      }
    }
   
  }
  pressEqual(){

    this.operand2 = this.result;
    this.creat();
    this.operand1 = '';
    this.operand2 = '';
    this.mainOperator='';
  
    
  }
  backSpace(){
   this.result= this.result.slice(0, -1);
   this.exp= this.exp.slice(0, -1);
  }
 
}
