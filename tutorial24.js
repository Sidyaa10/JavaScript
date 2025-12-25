//In JavaScript functions are objects.
// This function is actually an object which is assigned to another variable "add" and then called using that variable.
function add(a,b){
    return a + b;
}

const n = add;
console.log(n(2,3));

// Internally functions are represented as objects in JavaScript meaning that they have properties and methods.