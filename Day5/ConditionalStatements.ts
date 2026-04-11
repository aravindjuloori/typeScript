//if condition

/*

syntax:
if(condition){
//stmts

}
*/

//Example 1:if age is greater than or equal to 18,the message "You are eligible " shoould be printed

/* let age:number=15;

if(age>=18){
    console.log("You are eligible for the vote");

}
 */


//if-else condition
/*

if(condition true){

    statements;
}
else
{
    statements;
}

*/

//Example 2 : if number is divided by its even or else its odd number

/* let num:number=36;

if(num%2==0){

    console.log(`${num} even number`);
}
else{

    console.log(`${num} odd number`);
} */


//Nested if-else

/*
if(condition 1){
statements;
}
else if(condition2){
    
    Statements;
    }
    else if (condition 3){
    statements;

    }

    else{
        statements;
        
        }


*/

//Eaxmple 3: Depending on the marks print the appropriate grade

/*
Marks >=90  -Grade A
marks >=75  -Grade B
marks >=60  -Grade C
Grade is D
*/


/* let marks:number=50;

if(marks>=90 && marks<=100){

    console.log("Grade A");
}

else if(marks>=75 && marks<90){

    console.log("Grade B");
}
else if(marks>=60 && marks<75){
    console.log("Grade C")

}
else{

    console.log("Grade D")
}
 */


//Eaxmple 4:browser selection
/* 
let browser:string='safari';

if(browser==="chrome"){
    console.log("Browser is chrome");
}

else if(browser==="firefox"){

    console.log("Browser is firefox");
}
else if(browser==="safari"){

    console.log("browser is safari");
}
else{

    console.log("Other browser");
} */

    //switch case statement

    /*
    switch(expression){
    
    case value1:statements;
                break;
    case value 2:statements;
                break;
    case value 3:statements;
                break;
    default: Statements
    
    }

    */

    //Eaxmple 5:Depending on the value of day,print the corresponding day of the week
/* 
    let day:number=1;

    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("wednesday");
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
 */


//Example 6: the Switch statement can also include in an expression

let x:number=25,y:number=10;

switch(x-y){   //expression

    case 0:console.log("Result zero");
           break;
    case 5:console.log("result is five");
            break;
    case 10:console.log("result is 10");
            break;
    default:console.log("Result is something else");

    
}
