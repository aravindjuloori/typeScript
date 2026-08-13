let a:number=10;
let b:number=20;


//1.Arithematic operators(+,-,*,/,%,**)

console.log("*************Arithematic operators*************");
console.log(a+b);   //output=30
console.log(b-a);   //output=10
console.log(a*b);   //output=200
console.log(b/a);   //output=2
console.log(a%b);
console.log(5**2);


//2.Assignment operators(=) or shorthand operators
console.log("*************Assignment operators*************");
a=10;
b=5;

// a=a+b;
// a+=b;
// console.log(a)

console.log(a+=b); // output=15
console.log(a-=b); //output=10
console.log(a*=b);//output=50
console.log(a/=b);//output=10
console.log(a%=b);

//3.Relational operators   -It will compare the values and return the boolean value true/false
//<,>,<=,>=,==,!=,===
console.log("*********Relational operators*************")
a=10;
b=20;

console.log(a>b);  //False
console.log(a<b);  //True
console.log(a<=b); //True
console.log(a>=b); //False
console.log(a==b); //False
console.log(a!=b); //True

//Difference between == and ===(Strict equality)
console.log("Difference between == and ===(Strict equality)")

let num1:any=10;
let num2:any="10";

console.log(num1==num2) ; //true  -- it will compare only the values
console.log(num1===num2); //false -- it will compare the values along with the data Types

//4.Logical operators && || ! 
//returns boolean value(true/false)
//works between boolean variables

console.log("************Logical Operators*****************")

let b1:boolean=true;
let b2:boolean=false;

console.log(b1&&b2);
console.log(b1||b2);
console.log(!b1)
console.log(!b2)


//combination of logical and relational opertors

console.log("*********Mixing of logical and relational operators*******");

console.log(20>10);   //true
console.log(20>10 && 10>5) //true
console.log(10<20 || 10>5) //true