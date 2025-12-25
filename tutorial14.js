//For loops are used to repeat a block of code multiple times. 
let num=[1,2,3,4,5,6,7];

for(let i=0;i<num.length;i++){
    console.log(num[i]);
}
//This is the basic for loop, We would use this when we know how many times we want to run our code.

//While loops are also used to repeat a block of code multiple times.
let a=[11,12,13,14,15]

let idx=(0);
while(idx<a.length){
    console.log(a[idx]);
    idx++;
}
//We will use while loops when we don't know how many times we need to run our code.
//The for loop and while loop are similar in functionality but they have different syntaxes.

//Do While Loop
let b=[1,2,3,4,5]

let indx=0;

do{
    console.log(indx);
    indx++;
}while(indx<b.length);
// Both do-while and while loop work similarly except that the body of a do-while loop is executed at least once even if the condition evaluates to false.
