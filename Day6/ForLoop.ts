//For loop:A for loop is typically used when the number of iterations is known beforehand


/*
syntax :
for(initialization;condition;inc/dec)
{
Statements
}

*/

//Ex1: print numbers from 1....10

/* for(let i=1;i<=10;i++){

    console.log(i);
} */


    //Ex2: print numbers even numbers from 1...10
//Method1:
/* for(let i=2;i<=10;i+=2){

    console.log(i);
} */

//Method 2: print even numbers   
/* for(let i=1;i<=10;i++){

    if(i%2==0){
        console.log(i);
    }
} */

    //print odd numbers from 1...10
   /*  for(let i=1;i<=10;i++){
        if(i%2!=0){
            console.log(i);
        }
    }
 */
//Example 3:
 //print numbers in the reverse order from 10 ...1


 /* for(let i=10;i>=0;i--){

    console.log(i);

 } */


    //Example 4:
/*     let i:number;   //global
    for(i=1;i<=5;i++){

        console.log(i);  //1...5
    }
    console.log(i); //6 */

let i:number;
for(i=1;i<=5;i++);
console.log(i);