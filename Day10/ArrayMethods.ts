//Array methods

let numbers:number[]=[10,20,30,40,50];
let fruits:string[]=["Banana","Orange","Apple","kiwi"];

console.log("Numbers Array: ",numbers);
console.log("Fruits Array:" ,fruits);


//length()

console.log("Size of the number Array is : ",numbers.length);
console.log("Size of the Fruits Array is : ",fruits.length);

//1.Push()- It will add single/multiple values at the end of the array
//syntax:array.push(element1,...elementN)

numbers.push(60);
console.log(numbers);

//2.pop()- It will move the last element from the array
//syntax:array.pop();

let lastfruit=fruits.pop();
console.log("Fruits Array:" ,fruits);
console.log("Removed fruit is:" ,lastfruit);


//3.shift()-- removes the first element from the array
//syntax: array.shift()

let firstnumber=numbers.shift();
console.log("Numbers Array: ",numbers);
console.log("Removed number is:" ,firstnumber);


//4.unshift()-- it will add the single/multiple values at the starting of array
//syntax:array.unshift(element1,....elementN);

fruits.unshift("mango","pears");
console.log("After unshift ",fruits);

//5.concat()-we can combine the arrays using concat method
//array.concat(value);

 let combinedArray=numbers.concat([8,9],[10]);
console.log("concatenated Array:",numbers);
console.log("combined array is :" ,combinedArray);   //combined array is : [20, 30, 40, 50,60,  8,  9, 10]

//6.slice() -Extracts an section of an array
//starting index is from 0
//ending index will be exclusive .
//syntax:array.slice(start,end);

console.log(fruits.slice(1,3));
console.log(fruits.slice(2,5)); 

//7.Splice()--Adds/removes the elements from array(from anywhere)
//syntax: array.splice(start,deleteCount,item1....itemN);
console.log("Current elements in the array are:" ,fruits); //[ 'mango', 'pears', 'Banana', 'Orange', 'Apple' ]

//only deletion
let removedElements=fruits.splice(1,2);
console.log("After Slice(1,2)",fruits)   //1 -- it is the starting index ,2--how many elements to be removed 
console.log(removedElements);

//Ex 2:Not removed but added
fruits.splice(1,0,"pineapple","grapes");
console.log("After splice(1,0,'pineapple','grapes')",fruits);

//Ex3: Both removed and added
fruits.splice(1,2,"mango","Cherry");
console.log("After splice()",fruits);


//8.indexOf()- it finds the index of an element. if not found return -1
//syntax: array.indexOf(searchElement) or array.indexOf(searchelement,startingindex)

//Ex 1: 
let bananaIndex=fruits.indexOf("banana");
console.log("Banana index: ",bananaIndex )  //it will return -1

//Ex:2
let cherryIndex=fruits.indexOf("Cherry");
console.log("Cherry index value is :", cherryIndex);

//Ex 3:
let cherryIndex1=fruits.indexOf("Cherry",2);
console.log("cherryIndex1  value is :", cherryIndex1);


//9.includes()-checks if an element exists in array

let isBananaPresent=fruits.includes("Cherry");
console.log("Does the fruits include banana:",isBananaPresent);


//10.toString()-converts array in to string

console.log(numbers)
let number:string=numbers.toString();
console.log("Convert array to string:",number);


let myarray:string[]=['a','e','i','o','u'];
console.log("original array:",myarray);

let stri:string=myarray.toString();
console.log("Converted string:",stri);