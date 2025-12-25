//Break statements in loops
//For loop with break statement
for (let i=0;i<10;i++){
    if (i===5){
        break; //breaks the loop when condition is met
    }
    console.log(i);
}

//While loop with break statement
let idx=0;
while(idx<10){
    if (idx===5){
        break;//breaks the loop when condition is met
    }
    console.log(idx);
    idx++;
}

//Do while loop with break statement
let indx=0;
do{
    if(indx===5){
        break;//breaks the loop when condition is met
    }
    console.log(indx);
    indx++;
}while(indx<10);

//For-In loop with break statement
const obj={a:1,b:2,c:3,d:4,e:5};
for(let key in obj){
    if (key==='b')
        break;//breaks the loop when condition is met
    console.log(key,obj[key]);
}

//For-of loop with break statement
const arr=[1,2,3,4,5];
for (let num of arr){
    if(num===3){
        break;//breaks the loop when condition is met
    }
    console.log(num);
}