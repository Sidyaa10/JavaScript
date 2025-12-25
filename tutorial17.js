//Continue statement in loops
//For loop with continue statement

for (i=0;i<10;i++){
    if(i%2===0){
        continue;//continue will skip the even numbers and print only odd numbers
    }
    console.log(i);
}

//While loop with continue statement
let idx=0;
while(idx<10){
    idx++;
    if (idx%2===0){
        continue; //will skip the even number and print only odd numbers
    }
    console.log(idx);
}

//Do while loop with continue statement
let indx=0;
do{
    indx++;
    if(indx%2===0){
        continue; //will skip the even number and print only odd numbers
    }
    console.log(indx);
}while(indx<10);

//For-In loop with continue statement
const obj={a:1,b:2,c:3,d:4,e:5};
for (let key in obj){
    if(obj[key]%2===0){
        continue; //will skip the even keys and print only odd keys
    }
    console.log(key,obj[key]);
}

//For-Of loop with continue statement
const arr=[1,2,3,4,5,6,7,8,9,10];
for(let num of arr){
    if(num%2===0){
        continue;//will skip the even numbers and print only odd numbers
    }
    console.log(num);
}

//Continue statement is used to skip a particular iteration in a loop. It can be used in for, while, do-while, for-in and for-of loops.