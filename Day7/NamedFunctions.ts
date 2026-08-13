//Named Function:A function declared with a name is called named function
//function -- it is a block of statements that performs a specific task. we have to call the function to execute it. 
//It is used for the reusability of the code.
/* 
1.Named Function 
2.Anonymous Function
3.Lamda Function */

/* syntax: 

function functionName(parameters):returnType{
//function body
}
functionName(arguments);  //Calling/Invoking the function 
*/


//Ex1: Named Function with no parameters and no return type

function display():void{
    console.log("Hello World");
}   
display();  //Calling/Invoking the function

//Ex 2:Named function with parameters and return type

function addNumbers(a:number,b:number):number{
    return a+b;
}
let result:number=addNumbers(10,20);
console.log("Addition of two numbers is :",result);
// console.log(addNumbers(10,20,30)); //Calling the function with 3 parameters but the function is defined with 2 parameters so it will ignore the 3rd parameter and return the sum of first 2 parameters.
// console.log(addNumbers(10));

//Ex 3:Named function with the rest parameters and return type
//Rest parameters don't restrict the number of arguments passed to the function. It allows us to pass any number of arguments to the function. The rest parameter is represented by three dots (...) followed by the parameter name.

function additionOfNumbers(...numbers:number[]):number{
 let i;
 let sum:number=0;
 for(i=0;i<numbers.length;i++){
     sum+=numbers[i];
 }
 return sum;
}
let result3:number=additionOfNumbers(10,20,30,40,50);//Calling the function with 5 parameters
console.log("Addition of multiple numbers is :",result3);
additionOfNumbers(10,30,40);


//Example 4: Named function with rest parameters -multiple types

function findElements(...elements:(string|number)[]):number
{
    return elements.length
}
console.log(findElements(3,"john",4,5,"Scott"));
console.log(findElements(10,20,30,40,50,60,70));
console.log(findElements("abc","xyz"));


//Example 5: Named Function with optional parameters
function displayDetails(id:number,name:string,email?:string){
    console.log("Id:",id);
    console.log("Name:",name);  
    if(email!=undefined){
    console.log("Email:",email);
    }
    
}
displayDetails(101,"John");
// displayDetails(102,"Scott","abc@gmail.com");

//Example 6:Named Function with default parameters

function calculateDiscount(price:number,rate:number=0.5){

    let discount=price*rate;
    console.log("Discount is:",discount);

}
calculateDiscount(1000,0.1); //Calling the function with 2 parameters
calculateDiscount(1000) //Calling the function with 1 parameter, rate will take the default value of 0.5