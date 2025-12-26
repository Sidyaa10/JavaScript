//Combinig and Slicing Arrays

const num=[1,2,3];

const nums=[4,5,6];

const combinedArray= num.concat(nums);
console.log(combinedArray); // This is how we can combine two arrays(.concat()),


const firstSlice=combinedArray.slice(0,3);
console.log(firstSlice);// This is how we can slice the array(.splice()),

//Combining Arrays using Spread Operator

const num2=[1,2,3];

const num3=[4,5,6];

let combined =[...num2,...num3];
console.log(combined);// This is how we can combine two arrays using spread operator.

// You can also add more elements in the array like this
let combined2 = [...num2,7,...num3,8];
console.log(combined2);