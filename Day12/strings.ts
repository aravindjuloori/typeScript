//String-Sequence of characters used to represent text.It can be declared using
/*
1.Single quote-String literal('')
2.Double Quote-String literal("")
3.backtick symbol(``)

//index starts with 0

*/

//Declaration of strings

let str1:string='This is string with single quote';
let str2:string="This is string with double quote";
let str3:string=`This is string with backtick`;

console.log(str1);
console.log(str2);
console.log(str3);

//When to use the back tick symbol

let num:number=10;

console.log("Number is :",num);
// console.log("number is ${num}"); //invalid
// console.log('number is ${num}'); //invalid
console.log(`number is ${num}`); //valid 

//String methods

let str:string="Hello Typescript";

//1.Length()--Find the length of a string
console.log("Length of a string is",str.length);

//2.toupperCase(),toLowerCase();
console.log("LowerCase text is :",str.toLowerCase());
console.log("UpperCase text is :",str.toUpperCase());

//3.charAt(index) /indexOf(substring) – Get a character or find a substring 

console.log("Character at 4th index",str.charAt(4));
console.log("Index of type",str.indexOf("Type"));


//4..substring(start, end) – Extract a part of the string
console.log("Substring value is:",str.substring(0,4));


//5.includes(substring) – Check if a substring exists 
//string value is case sensitive
//It will return boolean value
console.log(str.includes("Type"));


//6.startsWith()/endsWith()- – Check start or end of string 
//It will return boolean value
//string value is case sensitive
console.log(str.startsWith("Hello"));
console.log(str.endsWith("script"));


//7.replace()
console.log("Replace string:",str.replace("Typescript","playwright"))

//8.split- breaks the string in to multiple parts based on the delimeter ,returns an array

//Ex1:
let words:string[]=str.split(" ");
console.log(words);

//Ex2:
let mystring:string="abc@gmail.com,xyzabc";
let arr=mystring.split(",");
console.log("email:",arr[0]);
console.log("password:",arr[1]);

//9.trim(),trimStart(),trimEnd()

mystring="   Welcome to typescript    ";
console.log("Original string:",mystring);
console.log("trim string:",mystring.trim());
console.log("trim start:",mystring.trimStart());
console.log("trim end:",mystring.trimEnd());


//10.concat-- it is used for joining 2 strings

let string1:string="welcome";
let string2:string="to typescript";

console.log(string1.concat(string2));
console.log(string1+string2);
console.log("welcome".concat("to typescript"));