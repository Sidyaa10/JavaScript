//Rest Operator
//The rest operator allows us to represent an indefinite number of arguments as an array.

function multiply(...args){
    return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}
console.log(multiply(1,2,3,4));

//Another example
function multiply(multiplier, ...numbers){
    return numbers.map(number => number * multiplier);
}

console.log(multiply(2,1,2,3,4));