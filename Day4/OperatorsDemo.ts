let a:number=10;
let b:number=20;


//1.Arithematic operators(+,-,*,/,%,**)

console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(b/a); //it will return the quoitent value
console.log(a%b);  // it will return the reminder value
console.log(5**2);  //exponential



console.log("**********Assignment operators**********")
//2.Assignment operators  (=)
a=10;b=5;

// a=a+b;
// a+=b;
// console.log(a);

console.log(a+=b);   //a=a+b;
console.log(a-=b);   //a=a-b;
console.log(a*=b);   //a=a*b;
console.log(a/=b);   //a=a/b;
console.log(a%=b);   //a=a%b;


//3.Relational operators   -It will compare the values and return the boolean value true/false
//<,>,<=,>=,==,!=,===
console.log("*********Relational operators*************")

a=10;
b=20;

console.log(a>b) ;  //false
console.log(a<b);   //true
console.log(a<=b);  //true
console.log(a>=b);  //false
console.log(a==b);  //false
console.log(a!=b);  //true


//Difference between == and ===(Strict equality)
console.log("Difference between == and ===(Strict equality)")
let num1:any=10 ;   //number data type
let num2:any="10";  //string data type

console.log(num1==num2); // true
console.log(num1===num2) //false


//4.Logical operators && || ! 
//returns boolean value(true/false)
//works between boolean variables

console.log("********Logical operators**************");

let b1:boolean=true;
let b2:boolean=false;

console.log(b1 && b2);  //false
console.log(b1 || b2);  //true
console.log(!b1);    //false
console.log(!b2);    //true


//combination of logical and relational opertors

console.log("*********Mixing of logical and relational operators*******");


console.log(20>10);    //true
console.log(20>10 && 10>5);  //true

console.log(10<20 ||5>10);   //true






