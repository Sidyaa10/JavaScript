//Let vs Var keyword
//After the integration of EcmaScript 6, let and const were introduced to replace var.
//These were added because var keyword was function scoped which means it was accessible only for the function and not to any blocks within that function e.g(loops and conditionals).

function display(){
    for (var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);//We can use this variable outside the function as well. Thats Because its is declared with var keyword which makes it a global variable.
}
display( );

//Another Example with let keyword

function display(){
    for( let i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);//This will give an error because we cannot access the variable outside the block scope.
}//This results in reference error. Using let or const keywords makes variables block scoped.

display();
