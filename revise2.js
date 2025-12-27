//Objects using detructured property

const person={
    name:'Sid',
    age:23,
    isMarried:false,
};

const {name,age,isMarried} =perosn;

const person1={...person, name:'Sid1'}//By using the spread operator we can copy all the properties of an object and add new ones to it.

//The spread operator also works with arrays.
const num=[1,2,3,4,5]
const num1=[...num, 6];
//This will create a new array with the elements of num and then add 6 to it.

