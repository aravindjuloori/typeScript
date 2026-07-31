console.log("*******Conditional Statements**********");
//if condition

//syntax:
/* if(condition){
    statements;
} */

//Example 1:if age is greater than or equal to 18,the message "You are eligible " should be printed
console.log("***********If condition***************");
let personAge:number=25;
if(personAge>=18){
    console.log("you are eligible for vote");
}


//if-else condition

/* syntax:
if(condition){
    statements;
}
else{
     statements;
}
 */

// Example 2:check the provided number is even or odd number
console.log("***********If-else***************");
let num:number=22;
if(num%2==0){

    console.log(`${num} is an even number`);
}
else{
    console.log(`${num} is an odd number`);
}


//Nested If condition
/* 
syntax:
if(condition1){
    statements;
}
else if(condition2){
      statements;
}
else if(condition3){
    statements;
}
else{
    statements;
} */

//Eaxmple 3: Depending on the marks print the appropriate grade

/*
Marks >=90  -Grade A
marks >=75  -Grade B
marks >=60  -Grade C
Grade is D
*/

console.log("***********Nested If-else***************");
let marks:number=90;
if(marks>=90 && marks<=100){
    console.log("Grade A");
}
else if(marks>=75 && marks<90){
    console.log("Grade B");
}
else if(marks>=60 && marks<75){
    console.log("Grade C");
}
else{
    console.log("Grade D");
}


//Eaxmple 4:browser selection

let browser:string="chrome";

if(browser==="chrome"){
     console.log("Browser is chrome");
}
else if(browser==="firefox"){
    console.log("Browser is firefox");
}
else if(browser==="safari"){
    console.log("Browser is safari")
}
else{
    console.log("other browser");
}

console.log("***********switch case***************");
 //switch case statement
/* syntax:
switch(expression){
    case1 value:statements;
                break;
    case2 value:statements;
                break;
    case3 value:statements;
                break;
        Default:statments
} */

//Eaxmple 5:Depending on the value of day,print the corresponding day of the week

let day:number=1;

switch(day){
    case 1:
       console.log("Monday");
       break;
    case 2:
       console.log("Tuesday");
       break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thrusday");
         break;
    case 5:
      console.log("Friday");
        break;
    case 6:
      console.log("saturday");
        break;
    case 7:
       console.log("sunday");
        break;
        default:console.log("Invalid week");  
}

//Example 6: the Switch statement can also include in an expression

 let x:number=25,y:number=15;

 switch(x-y){
    case 0:console.log("Result is zero");
            break;
    case 5:console.log("Result is five");
           break;
    case 10:console.group("Result is Ten");
             break;
      default:console.log("Result is something else")       
 }