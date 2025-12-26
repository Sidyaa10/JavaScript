//Testing the element of an array

const num=[2,4,6,8,10,13];

const areAllEven=num.every((num)=> num%2===0);
console.log(areAllEven);
// This will return true as all elements in the array are even numbers.

const nums=[1,3,5,7,9,11];

const areAllOdd=nums.some((num)=> num%2!==0);
console.log(areAllOdd);
//This will also return true as all elements in the array are odd numbers.

//.every() method in the array data structure and it tests wether every element in the array satisfies the given condition.
//.some() method is used to test whether atleast one element in the array satisfies the given condition.