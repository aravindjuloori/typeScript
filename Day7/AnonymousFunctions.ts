//Anonymous Function(unNameedFunction/Nameless Function) - function without name
//It is a function that doesnt have a name ,instead it is stored in a variable or constant. we can invoke the function using that variable or constant name.


//syntax
/*
let variableName=function():returnType{
    //function body
}
    variableName();   //Calling/Invoking the function

*/

//Ex:1 Anonymous function with no parameters and no return value
let anonymousFunction = function(){
    console.log("Anonymous Function with no parameters and no return value");
}
anonymousFunction();   //Calling/Invoking the function

//Ex 2:Anonymous function with parameters and return type
let addNumber=function(a:number,b:number):number{
    return a*b;
}
console.log(addNumber(10,20));


//Ex 3:Anonymous function with Rest parameters with same data types
let addition=function(...nums:number[]):void{
let i;
let sum:number=0;
for(i=0;i<nums.length;i++){
    sum=sum+nums[i]
}
console.log(sum);
}
addition(10,20,30,40,50);
addition(10,20,30,40,50,60,70,80,90,100);

//Ex 4:Anonymous function with Rest parameters with multiple data types
let addElements=function(...elements:(number|string)[]):number{
    return elements.length;
}
console.log(addElements(10,20,30,40,50));
console.log(addElements("Aravind",1000,"Scott",2000));

//Ex 5:Anonymous function with optional parameters
let displaydetails=function(id:number,name:string,email?:string){
    console.log("ID:",id);
    console.log("Name:",name);
    if(email!=undefined){
        console.log("Email:",email);
    }
}
displaydetails(101,"Aravind","aravind.juloori@gmail.com");
displaydetails(102,"Aravind");

//Ex 6:Anonymous function with Default parameters
let calculateDiscounts=function(price:number,rate:number=0.1){

    let Discount=price*rate;
    console.log("Discount is:",Discount);
}
calculateDiscounts(1000,0.5); //Calling the function with 2 parameters  
calculateDiscounts(1000); //Calling the function with 1 parameter but the function is defined with 2 parameters so it will take the default value of 2nd parameter and return the discount.
