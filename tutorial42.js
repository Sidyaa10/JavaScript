//Functions declaration and expression
//Functions are cornerstone in JavaScript serving as reusable code blocks
//In JS functions are objects

//Function declarations are traditional way of defining functions in js
function sayHie(){
    console.log('Hi');
}
sayHie();//This is a function declaration

//Function expressions are another way to define functions in js. Which can either be an anonymous or named function.

let sayHi = function(){
    console.log('Hey');
};
sayHi();//This is a function expression