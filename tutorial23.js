//Objects are dynamic in nature because we can change and mutate them by adding new properties to it at any time
const person={
    name: 'Sid',
};

console.log(person);

person.age=23;
console.log(person);//Now it will give this output:- { name: 'Sid', age: 23 }
person['weight']=78;
console.log(person); //Now it will give this output:- { name: 'Sid', age: 23, weight: 78 }

delete person.age;// Used to delete the property from object
console.log(person); //Now it will give this output:- { name: 'Sid', weight: 78 }

person.run=function(){
    console.log('I am running');
}

person.run();// Now it will print I am running
 
// Some insight on constructor property, Constructor propety is a property that exists for all objects in JavaScript, you can access it with .dot notation or bracket notation and it references the constructor function that was used to create that object.