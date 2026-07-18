//Anonymous Function(unNameedFunction/Nameless Function) - function without name

//It is a function that doesnt have a name,instead it is assigned to a variable or constant and can be invoked using that variable or constant name

//syntax:

/*
let variableName=function():returnType{
    //function body
}
    variableName();   //Calling/Invoking the function

*/

//Ex:1 Anonymous function with no parameters and no return value

/* let msg=function():string{
    return "Hello typescript";
}
console.log(msg());  //Calling the function */


//Example 2: Anonymous functions with parameters

/* let multiply=function(a:number,b:number):number{
    return a*b;
}
console.log(multiply(5,10));  //Calling the function
 */

//Example 3: Anonymous function with rest parameters

/* let addition=function addNumbers(...nums:number[]){

    let i;
    let sum:number=0;
    for(i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }
   console.log("sum of numbers:" ,sum);
}
addition(10,20); */

//Example 4: Anonymous function with rest parameters - multiple types

/* let findelements=function(...elements:(string|number)[]):number{
    return elements.length;
}
console.log(findelements(3,"john",4,5,"Scott"));
console.log(findelements(10,20,30,40,50,60,70));
console.log(findelements("abc","xyz")); */

//Example 5:Anonymous function with optional parameters

/* let displaydetails=function(id:number,name:string,emailid?:string):void{
    console.log("Id:",id);
    console.log("Name:",name); 
     if(emailid!==undefined){
    console.log("Email:" ,emailid); 
    }
}
displaydetails(102,"Scott","aravind@gmail.com");
displaydetails(101,"John"); */

//Example 6: Anonymous function with default parameters


let Discount=function(price:number,rate:number=0.1):void{
    let discount=price*rate;
    console.log("Discount:",discount);

}
Discount(1000,0.2);
Discount(1000);