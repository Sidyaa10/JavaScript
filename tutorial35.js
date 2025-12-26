//Removin elements from an array

const num=[1,2,3,4,5,6];

const lastElement=num.pop();// This is will remove the last element of the array and return it.
console.log(`lastElement: ${lastElement}`);

const firstElement=num.shift(); //This will remove the first element of the array and return it
console.log(`First Element:${firstElement}`);

const middleElement =num.splice(1, 1);//This will remove the element at index 1 and return it.
console.log(middleElement);

//Removing Elements from an array

const fruits=['apple','banana','orange'];

while(fruits.lenght>0)//While loop to remove all elements from the array.
    fruits.pop();

fruits.length=0;//Another way to empty the array.
console.log(fruits);

const deletedFruits =fruits.splice(0, fruits.length);
console.log(`deletedFruits: ${deletedFruits}`);//This will delete all elements from the array.

