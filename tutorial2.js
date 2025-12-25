// Primitive Data Types string, number, bigInt, boolean, null, undefined, symbol and these values can contain only one value at a time
//Non-primitive data type Object
let favouriteFruit='Pineapple';
let favouriteIceCream= "ButterScotch";
console.log(favouriteFruit, favouriteIceCream);
// Two types to declare stirngs with single quotes or double quotes

let numberOfDonuts= 10;
let pi =3.14;
let veryLargeNumber = 2427538138136139613;
console.log(numberOfDonuts,pi,veryLargeNumber);
// This is how we can declare numbers in javascript

let isRaining=false;
let isSunny=true;
console.log(isRaining,isSunny);
// This how you assign Boolean values, they are either true or false

let myCar;
console.log(myCar); //undefined is the output because it has no value assigned to it
let myHouse=null;
console.log(myHouse);//null is the output because it has a value of nothing assigned to it

const uniqueKey=Symbol('a unique key');
//This is how symbols are declared

let course={
    name: 'Javascript',
    duration:'3 months',
    isPaid:true,
}
console.log(course.name,course.duration,course.isPaid)
// This is an object which contains three properties