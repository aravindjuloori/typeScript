//CallBack Function: It is a function which is passed as an argument to another function and it is executed later

//Example1: 
//Function that takes callback function as a parameter

function greeting(name:string ,smsg:(message:string)=>void){
    console.log("Hello " + name);
    smsg("Welcome to the callback function example!");
}



//CallBack Function
function showMessage(message:string){
    console.log(message);
}
// showMessage("Hello, this is a callback function example!");
greeting("john", showMessage); //arguments




//Example 2:
function displayresult(result:number):void{
    console.log(result);
}

function calculate(num1:number,num2:number,callback:(result:number)=>void){ 
    let result=num1+num2;
    callback(result);
}

calculate(5,10,displayresult);