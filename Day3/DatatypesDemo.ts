/*
JavaScript is a dynamically typed programming language and its not type safety
TypeScript is a statically typed programming language and its type safey

Data Type -It represents what type of data we are storing in a variable. 

1.Primitive data types -
number
String
boolean
null 
undefined
Any 
union type 
void


2.non-primitive data types
Array
class
Function
Interface 
Touple etc..
*/



//1.Number type --- it represents both integers and floating point numbers
/* let age:number=30;
let price:number=46.90;
let bignumber=12323213123;


console.log("Age is:",age);
console.log("Price is:",price);
console.log("Big Number is:",bignumber); */

// console.log(typeof(age));
// console.log(typeof(price));


//2.String Type-- it represents the textual data ,we can declare strings in 3 different types

/*
1.single quote('')
2.Double quote("")
3.backtick(`)

*/


/* let firstname:string='John';
let lastname:string="Doe";

console.log("Hello",firstname,lastname);

let greeting:string=`Hello ${firstname} ${lastname}`;
console.log(greeting); */


//3.Boolean Type -- it respresents true/false  -- it will be used in conditional and looping statements

/* let isStudent:boolean=true;
let hasJob:boolean=false;

console.log("Is Student?",isStudent);
console.log("Has Job?",hasJob);
 */

//4.Null and Undefined --special types for the absence of value

/* let emptyValue:null=null;
let notAssigned:undefined=undefined;

console.log(emptyValue);
console.log(notAssigned);

let price1:number;

console.log(price1);   //its compile time error
 */

//5.Any-  We need to use this data type carefully as it will voilates the typescript type safety.


/* let value:any="welcome";
console.log(typeof(value));

value=100;
console.log(typeof(value))

value=true;
console.log(typeof(value))

console.log(value);
 */


//6.union type  -it will combine multiple types

/* let id:number |string  | boolean;
id="ABC123";
console.log(id);

id=12345;
console.log(id);

id=true;
console.log(id) */

//7.void Type -It is used for the functions that don't return any value

function show():void{
    console.log("Welcome");
}

show();


function sum(x:number,y:number):number{

    return(x+y);
}

let result:number=sum(10,20);
console.log(result);
