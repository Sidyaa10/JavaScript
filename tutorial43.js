//Hositing in JS 
//We can call a function before declaring it. This is called as hoisting.
add(5+4);
function add(a,b){
    console.log(a+b);
};
//add(6,7);
//Hoisting does not work with function expressions.