//Finding Elements Primitive types
//Arrays can store both primitive data types and reference data types(objects)
//There are three methods to check if an array contains a primitive value which are
//.indexOf(), .lastIndexOf(),.includes()

const num=[1,2,3,4,5,6];

const indexOf=num.indexOf(3);//This will tell me the index of 3 in my array which is 2
console.log(indexOf);

const lastIndex=num.lastIndexOf(5);//This will tell me the last index of 5 in my array which is 4
console.log(lastIndex);

if (!num.includes(6)){ //If there is no 6 in my array then it will print No otherwise Yes
    console.log('No');
}else{
    console.log('Yes');
}