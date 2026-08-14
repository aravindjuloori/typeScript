/*
Arrays in typescript
-An array is a special type of variable that can store multiple values in a single variable.
-The values can be of same data type or different data types.
-Arrays can be declared using '[]' or Array<T> the generic way
-Indexing of array will start from0
-Arrays are ordered collection of elements.
*/


//Approach 1:
//Declaring an array in typescript
//syntax:

let names:string[]=[]; //Declaring the array

//Initialization/assiging the values
names[0]="Aravind";
names[1]="Bhavani";
names[2]="Maanvitha";
names[3]="Mokshith";
console.log(names)

//Approach2 
let names1:string[]=["Srinivas","RajyaLaxmi","Aravind","Bhavani","Maanvitha","Mokshith"];  //Declaration and initialization
console.log(names1);



//Approach 2: using generic way with Array Keyword
let empNames:Array<string>=["Aravind","Bhavani","Maanvitha","Mokshith"];
console.log(empNames);

let empIds:Array<number>=[101,102,103,104];
console.log(empIds);

let data:Array<string|number>=[101,"Aravind",102,"Bhavani"];
console.log(data);

let mixedData:Array<any>=["Aravind",101,true,null,'A'];
console.log(mixedData)



//Accessing element from Array
console.log(empNames[2]);


//Ex1: Iterating over an  Array using for loop

for(let i=0;i<empNames.length;i++){
    console.log(empNames[i]);
}


//Example 2:Iterating array using 'for ..in' loop

console.log("Employee ids...using for..in");
for(let i in empIds){
    console.log(empIds[i])
}

//Example 3:Iterating array using 'for-of' loop

console.log("data....using for..of")
for(let value of data){
    console.log(value);
}

//Ex 4: passing array to function
//Search an element in array 

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


function capitalizeWords(arr:string[]):string[]{
   
    let result:string[]=[];
    for(let i=0;i<arr.length;i++){

        result[i]=arr[i].toUpperCase();
    }
        return result;

}

let words:string[]=["Aravind","bhavani","maanvitha","mokshith"];
console.log(capitalizeWords(words));