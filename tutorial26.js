//Enumerating properties of an objects
let numbers=[1,2,3,4,5];
for (const elements of numbers){
    console.log(elements);
}

const person={
    name:'Sid',
    age:23,
    eyeColor: 'Black',
};
for (const key in person){
    console.log(person[key]);
}

const keys =Object.keys(person);
console.log(keys);// returns array of all the keys

const values= Object.values(person);
console.log(values);//returns array of all the values

const entries= Object.entries(person);
console.log(entries); //returns array of arrays containing both keys and values
