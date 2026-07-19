//Tuple -It is a fixed length array where element has a specific type.
//It helps in storing multiple fields of different data types together.

//Example 1: tuple with 2 values

let person:[string,number]=["Aravind",101];
/* console.log(person[0]);
console.log(person[1]); */

console.log(person);


//Example 2:Tuple with multiple values

let user:[number,string,boolean,number,string]=[101,"aravind",true,102,"Bhavani"];
console.log(user);


//Example 3:Iterating over tuple using the traditional for loop

console.log("traditional for loop....")

for(let i=0;i<user.length;i++){
    console.log(user[i]);
}

//Example 4:Iterating  using for...in...loop(index based iteration)
console.log("using for...in..loop");

for(let i in user){
    console.log(user[i]);
}

//Examp;e 5:Iterating using for...of...loop(value based iteration)
console.log("using for...of..loop");
for(let value of user){
    console.log(value);
}

//Example 6:tuple array(array of tuples)
let students:[number,string][]=[[101,"jack"],[102,"peter"],[103,"john"]];
console.log(students.length);

console.log(students[0]); //[ 101, 'jack' ]
let tp=students[0];
console.log(tp[0]);
console.log(tp[1]);
