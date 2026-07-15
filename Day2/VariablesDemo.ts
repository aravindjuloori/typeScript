//Variable- It is a container which is use to store data

/* In JavaScript and typescript we can declare the variables by using 3 keywords var,let and const
In Javascript and typescript specifying the datatype is optional */

//syntax for creating a variable
//keyword VariableName:dataType=value;

var x=10;
let studentName="john";

console.log(x);
console.log(studentName);


//Difference between Var,Let and Const -Based on the 5 parameters we can differentiate
/*
1.Scope
2.Declaration/value assignment
3.Re-Declaration
4.Re-initialization/re-assignment
5.Hoisting
*/

//Var is not recommended to use in mordern javascipt/typescript.Avoid var because it has function scope and can lead to unexpected issues
//let -- we can use let when you need a variable value that can change
//const- we can use const when you need a variable value that we can't change it
console.log("**********************************************");
//1.Scope- It is the region of the program where a variable is defined and can be accessed
//Ex1:var(Functional scope)

function varscope(){
    if(true){   
        var msg="Hello world var ";
        // console.log(msg); //Hello world
    }
    console.log(msg); //Hello world
}
varscope();

//Ex2:let(Block scope)

function blockScope(){
    if(true){
        let msg1="Hello world let";
        const greet="Hello const";
        console.log(msg1);
        console.log(greet);
    }
    // console.log(msg1);
    // console.log(greet);
}

blockScope(); 

//Ex3:
function scopeDiff(){

    if(true){
        var num1=10;
        let num2=20;
        const num3=30;
        console.log(num1);
        console.log(num2);
        console.log(num3); 
}
}
scopeDiff();
console.log("**********************************************");

//2.Declaration/value assignment
console.log("***Declaration/value assignment***");
//Ex 1:using var
 var l;   //Declaration
 console.log(l);
 l=30;   //Initialization
 console.log(l); //30

 //Ex 2:using let
 let m;  //Declaration
 console.log(m);
 m=40;  //Initialization
 console.log(m); //40

//Ex 3: Using const  -- we must initialize at the time of declaration only.
//  const n;//Error: const declarations must be initialized
const n=50;  //Declaration and Initialization
 console.log(n);  

console.log("**********************************************");

 //3.Re-Declaration
console.log("***Re-Declaration***");
//Ex 1:Var allows re-declaration

var city="New York";
var city="Los Angeles";  //Re-declaration
console.log(city); //Los Angeles

//let and const not allowed the redeclaration
let country="USA";
// let country="Canada"; //Error: Cannot redeclare block-scoped variable 'country'

const state="California";
// const state="Texas"; //Error: Cannot redeclare block-scoped variable 'state' 

console.log("**********************************************");

//4.Re-initialization/re-assignment
console.log("***Re-initialization/re-assignment***");   

//Ex 1:Var allows re-initialization/re-assignment
var age=25;
age=30; 
console.log(age); //30

let salary=50000;
salary=60000; 
console.log(salary); //60000    

const pi=3.14;
// pi=3.14159; //Error: Cannot assign to 'pi' because it is a constant
console.log(pi); //3.14

console.log("**********************************************");
//5.Hoisting
console.log("***Hoisting***");
console.log(a); 
var a=10; 
console.log(a); //10

//Ex2:
// console.log(b); //Error: Cannot access 'b' before initialization
let b=20; 
console.log(b); //20

//Ex3:
// console.log(c); //Error: Cannot access 'c' before initialization
const c=30; 
console.log(c); //30