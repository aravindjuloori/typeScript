//Variable : It is a container which can hold some data


//In javascript and typescript we can declare the variables using 3 keywords var,let and const
//in javascript and typescript specifying the data type is optional

//syntax for creating a variable
//keyword variablename:Datatype=value

// var age:number=30;
// var age=30;

// console.log(age);

//Difference between Var,Let and Const -Based on the 5 parameters we can differentiate
/*
1.Scope
2.Declaration/value assignment
3.Re-Declaration
4.Re-initialization/re-assignment
5.Hoisting
*/

//Var is not recommended to use in mordern javascipt/typescript.Avoid var because it has function scope and can lead to unexpected

//let -- we can use let when you need a variable value that can change
//const- we can use const when you need a variable value that we can't change it


//Ex1:var(Functional scope)

/* function varscope(){

    if(true){
        var msg="Hello world";
    //   console.log(msg);
    }
     console.log(msg);
}
varscope();

 */
//Ex2: Let (Block Scope)

/* function blockscope(){
    if(true){

        let msg="Hello world";
        const greet="Hello const"
        // console.log(msg);
        // console.log(greet);
    }
    // console.log(msg);  // we cannot access as this are block scope
    // console.log(greeting); // we cannot access as this are block scope
    
}
blockscope(); */

//Example 3:

/* function scopeDiff(){
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
 */


//2.Declaration/value assignment
//Ex1: using var
/* var x;  //declaration
console.log(x);

x=30;  //initialization
console.log(x);
 */


//Ex2: using let
/* let x;  //declaration
console.log(x);
x=30;  //initialization
console.log(x);
 */

//Ex 3: Using const
// const z;  //incorrect
/* const z=50;   //correct it will print the value of z
console.log(z);
 */

//3. Re-declaration
//var- it allows the redeclaration
//let and const- not allows the redeclaration (making code safer)
//Ex1:var 
/* var city="New york";
var city="Los Angeles";
console.log(city); */

//Ex2: let
/* let country="India";
let country="USA";
console.log(country);
 */

//Ex3: using const
/* const planet="Earth";
const planet="Mars";
console.log(planet); */

//4.Re-initialization/re-assigning value
//Var and let allows the reassignment the value
//Ex1:var allows the reassignment
/* var age=25;
age=30;
console.log(age); */

//Ex2:let allows the reassignment
/* let age1=25;
age1=35;
console.log(age1); */

//Ex3: const will not allow the reassignment
/* const age1=30;
age1=35; //not allowed
console.log(age1); */

//5.Hoisting
/* console.log(a); //undefined
var a=10;
console.log(a); */

//using let
/* console.log(a)  //initialization error
let a=10;
console.log(a); */

//using const
// console.log(a) //initialization error
/* const a=10;
console.log(a) */

