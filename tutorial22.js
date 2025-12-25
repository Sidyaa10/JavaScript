//Constructor function is used to construct the initial state of an object. While creating constructor function we use pascal notation case.
//Constructor function uses a this keyword to refer current instance of that class.

function Dog(name, breed,age,weight){
        // this={};
        //Add properties to this keyword.
        this.name=name;
        this.breed=breed;
        this.age=age;
        this.weigth=weight;
}

const dog=new Dog('Muller','German Shepard',8,45);
console.log(dog);
//This is how we create objects using constructor functions.