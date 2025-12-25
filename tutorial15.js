//For-In Loop in JavaScript
//This is a loop that iterates over the properties of an object or elements of an array.
const course={
    name:'JavaScript',
    Price:7000,
    Instructor:'DeveloperSid',
    duration:'2 months',
};

for(const key in course){
    console.log(course[key]);
}
//This is how you use for-in loop to iterate through objects and arrays.

//For-Of Loop in JavaScript
//This is a loop that iterates over iterable objects like strings, arrays, maps etc.
let arr=[1,2,3,4,5];

for (let num of arr){
    console.log(num);
}
//This is how you use for-of loop to iterate through arrays.