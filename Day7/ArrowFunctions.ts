//Arrow Functions(Lamda Functions)
//It is also kind of anonymous function which doesnt have name instead it is assigned to a variable
//In Arrow function we never use function keyword instead we use =>(fat arrow) operator to define the function

/*

-It is also called as Lamda function


syntax:
let variableName=(parameters)=>{
function body
}
variableName();   //Calling/Invoking the function
*/

//Example 1: Arrow function with no parameters and no return value

/* let greet=():void=>{

    console.log("Hello typescript");
}

greet();  //Calling the function
 */

//Example 2: Arrow function with parameters and return value

/* let add=(a:number,b:number):number=>{
    return a+b;
}      
console.log("Addition of two numbers is: ",add(10,20));  //Calling the function  */

//Example 3:Arrow function with implicit return type
/* let multiply=(a:number,b:number):number=>a*b;  //No need to write return keyword and curly braces
let add =(a:number,b:number):number=>a+b;  //No need to write return keyword and curly braces

console.log("Addition of two numbers is: ",add(10,20));  //Calling the function
console.log("Multiplication of two numbers is: ",multiply(10,20));  //Calling the function */

//Example 4:Arrow Function with optional parameters


/* let displayDetails=(id:number,name:string,emailid?:string):void=>{

    console.log("Id: ",id);
    console.log("Name: ",name);
    if(emailid!=undefined){
        console.log("Email Id: ",emailid);
    }
}   
displayDetails(101,"John");  //Calling the function
displayDetails(102,"Smith","Aravind.juloori@gmail.com") */


//Example 5:Arrow Function with default parameters
/* let calculateDiscount=(price:number,rate:number=0.05):void=>{
    let discount= price*rate;
    console.log("Discount: ",discount);
}
calculateDiscount(1000);  //Calling the function with default parameter
calculateDiscount(1000,0.1);  //Calling the function with user defined parameter */


//Example 6:Arrow Function with rest parameters
let sum=(...nums:number[]):void=>{
    let i;
    let sum:number=0;
    for(i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    console.log("Sum of numbers is: ",sum);
}

sum(10,20,30);  //Calling the function


