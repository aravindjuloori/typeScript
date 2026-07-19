"use strict";
//JS is a dynamically typed programming language

let age=30; //age is a number
console.log(typeof(age));

age="Thirty"; //age is a string
console.log(typeof(age));
console.log(age);     //thirty


//Type safety --not

let message="Hello";   //String
let count=40;          //Number
message=100; //message is now a number
console.log(typeof(message)); //number
console.log(message);          //100




let result="5"+3;
console.log(result); //53