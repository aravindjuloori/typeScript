//Named Function: A Function declared with a name is called a named function 

/*
syntax:
function functionName(parameters){
//function body;
}

functionName();   //Calling/Invoking the function
*/

//Ex1: Named Function with no parameters and no return type
/* function display():void{
    console.log("Hello World");
}
display();  //Calling the function */

//Ex 2:Named function with parameters and return type

/* function addNumbers(a:number,b:number):number{
    return a+b;
}
console.log(addNumbers(5, 10));   */

// console.log(addNumbers(20, 30,10));  //Calling the function
// console.log(addNumbers(20));  //Calling the function

//Ex 3: Named function with Rest Parameters and return type
//Rest parameter don't restrict the no. of values that you can pass to a function

/* function addNumbers(...nums:number[]){
    let i;
    let sum:number=0;
    for( i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    console.log("sum of the numbers" ,sum)
}

addNumbers(10,20);
addNumbers(10,20,30,40,50);
 */

//Example 4: Named function with rest parameters -multiple types

/* function findElements(...elements:(string|number)[]):number{

    return elements.length;

}

console.log(findElements(3,"john",4,5,"Scott"));
console.log(findElements(10,20,30,40,50,60,70));
console.log(findElements("abc","xyz")); */

//Example 5: Named Function with optional parameters

/* function displayDetails(id:number,name:string,email?:string):void{
    console.log("Id:",id);
    console.log("Name:",name);  
    if(email!=undefined){
        console.log("Email:",email);
    }
}
displayDetails(101,"John");
displayDetails(102,"Scott","abc@gmail.com"); */

//Example 5:Named Function with default parameters

function calculateDiscount(price:number,rate:number=0.5):void{

    let discount=price*rate;
    console.log("Discount amount:" ,discount);
}
calculateDiscount(100,0.30);
calculateDiscount(1000);





