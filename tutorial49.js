//Local Scope and Global Scope
//Global scope: Variables declared outside of a function or block are accessible from anywhere within the program's execution context.
//Local scope: Variables declared inside a function or block are only accessible within that specific function or block.
//It helps structuring our code more effectively preventing accidental data modification and keeping your global namespace uncluttered.

const name='Sid';
console.log(name);//Here name is declared globally so it can be accessed anywhere in the code.

{
    const name='Sid1';
    console.log(name);//Here name is declared locally so it cannot be accessed outside this block.
}

//Another example in function

function greet(){
    const message='Hello World';
    console.log(message);
}

greet();
console.log(message);//This will give an error as message is not defined globally as it is defined locally inside the function block.