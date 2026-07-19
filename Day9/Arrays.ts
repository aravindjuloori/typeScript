/*
Arrays in Typescript

*An array is a special type of variable that stores multiple values
*The values can be of same data type or different data type
*Arrays are declared using '[]' or the generic way 'Array<T>' 
*Indexing starts from 0
*Arrays are an ordered collection of elements
*/


//Approach 1:

/* let names:string[]=[];  //Declaring the array

//Initialization/assiging the values
names[0]="Aravind";
names[1]="bhavani";
names[2]="Maanvitha";
names[3]="Mokshith"; */

// let names:string[]=["Aravind","Bhavani","Maanvitha","Mokshith"];
// console.log(names);


//Approach 2: using generic way with Array Keyword

let empNames:Array<string>=["Aravind","Bhavani","Maanvitha","Mokshith"];
console.log(empNames);

let empIds:Array<number>=[101,102,103,104];
console.log(empIds);

let data:Array<string|number>=["Aravind",101,"Bhavani",200];
console.log(data);

let mixedData:Array<any>=["Aravind",101,true,null,'A'];
console.log(mixedData)

//Accessing element from Array

// console.log(empNames[2]);

//Ex1: Iterating over an  Array using for loop

for(let i=0;i<empNames.length;i++){
    console.log(empNames[i]);
}

//Example 2:Iterating array using 'for ..in' loop

console.log("Employee ids...");

for(let i in empIds){
    console.log(empIds[i]);
}


//Example 3: Iterating array using 'for...of' loop

console.log("data....");

for(let element of data){
    console.log(element);
}

//Ex 4: passing array to function

function search(ele:number,arr:number[]):boolean{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==ele){
            return true;   //element found
        }
        
    }
        return false;  //element not found
}
let arr:number[]=[10,20,30,40,50];
console.log(search(30,arr));
console.log(search(100,arr));

//Example 5: An function takes array and returns an array

function capitalizedwords(arr:string[]):string[]{

    let result:string[]=[];

    for(let i=0;i<arr.length;i++){

      result[i]= arr[i].toUpperCase();
    }

    return result;

}


let words:string[]=["hello","world","typescript"];
console.log(capitalizedwords(words));

