//Reducing an array
//It can transform an array into any element, wether it is a number or string an object or even another array.

const num=[1,10,5,14];

const sum= num.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`Total sum: ${sum}`);
//This is a simple example of reducing an array.