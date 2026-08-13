//Step 1:signature of the functions
//Step 2:we need to implement the function
//Step 3:calling the function


//Ex 1:different type of parameter types(data types)
//Step1
/* function getinfo(id:number):string;
function getinfo(name:string):string;   


//Step2
function getinfo(param:number|string):string{

    if(typeof param === "number"){  
        return (`ID: ${param}`);
    }else{
        return (`Name: ${param}`);
    }   
}

//step3
// console.log(getinfo(101));
console.log(getinfo("John"));
 */


//Ex 2:different number  of parameters

/* function add(x:number,y:number):number;
function add(x:number,y:number,z:number):number;


//step 2:implementation of the function
function add(x:number,y:number,z?:number):number{
    if(z !== undefined){
        return x+y+z;
    }else{
        return x+y;
    }
}
console.log(add(10,20));
console.log(add(10,20,30));
 */


//Ex 3:different return type of the function
function processInfo(id:number):number;
function processInfo(name:string):string;

function processInfo(input:number|string):number|string{
    if(typeof input === "number"){
        return input*10;
    }else{
        return input.toUpperCase();
    }
}
console.log(processInfo(10));
console.log(processInfo("John"));

//Ex 4:

