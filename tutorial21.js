//Objects literals
//Factory functions provide an efficient way to create multiple similar objects. It reduces code duplication.
const person={
    firstName:'Sid',
    age:23,
    weight:'78KG',
    Gender:'Male',
    eat: function(){
        console.log('I am eating');
    },
    run(){
        console.log('I am running');
    },
}
console.log(person);
person.eat();
person.run();
// Purpose of JavaScript objects store key value pairs by storing state and behaviour, state is represented as properties and behaviour is represented as methods.

function getPerson(firstName,age,weight,gender){
    return{
        firstName,
        age,
        weight,
        gender,   
    }
}

const anotherPerson=getPerson('Chinatsu',20,'48KG','Female');
console.log(anotherPerson);