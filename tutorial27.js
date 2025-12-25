//Cloning a Object
//In JavaScript you can make a clone of an object using spread operator or object.assign method.

let a={value:10};
let b={...a}; // spread operator to clone a object

Object.assign(b,a);// assign method to clone an object

b.value=20;

console.log(a);
console.log(b);
// This how we can clone an object