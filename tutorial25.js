//Value and Reference Types
//Primitive values(strings,boolean and number etc..) are passed by copy not by reference
//Object values(Key value pairs, arrays etc..) are passed by reference

let a=10;
let b=a;

a=20;

console.log(a);
console.log(b);