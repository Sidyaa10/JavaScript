//Function Arguments


function multiply(a,b){
    console.log(arguments); //This will give us all the arguments that were passed to this function
 return a*b;
}
    console.log(multiply(2,4,6));
//We will get Not an Actual Number NAN
//Thats because we are not passing the second argument and it is considered as undefined