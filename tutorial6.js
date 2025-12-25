// Functions allowa us to group a block of code together to perform an task or calculate a value and return a value if needed. 
function sayHello(name){
    console.log('Hello '+name);// This is the function body, and I used string concatenation here to add name to our message.
}
sayHello('World');// We call the function by typing its name followed by parentheses

function multiply(x,y){
    return x*y;
}

console.log(multiply(3,4));
// The above code will print 12 because we are calling the function with arguments 3 and 4