//Mapping an Array
//The .map() method is a cornerstone of array manipulation in JavaScript. It allows you to process and transform array elements into new values, creating a brand-new array with the transformed data.

const num=[2,4,6,8,10];

const sqrNum= num.map(num=> num* num);
console.log(sqrNum);
//This helps transform each number in the original array to its square.

const char=['a','b','c','d']

const upperCase = char.map(char=> char.toUpperCase());
console.log(upperCase);
//Map also helps convert characters from lowercase to uppercase. And provides a new array with all letters capitalized.

const names=[
    { name:'Sid', email: 'SiD@gmail.com'},
    { name:'Sid1', email:'SUn@gmail.com'},
    {name:'Sid3',email:'sidYAA@gmail.com'},
    {name:'Sid4',email:'SIDD@gmail.com'},
];

const lowerCase= names.map(names => ({
    ...names,
    email:names.email.toLowerCase(),
}));
console.log(lowerCase);
//In this example, we have an array of objects representing users' information. We use map to create a new array where each user's email address is converted to lowercase.
//By using the spread operator (...), we ensure that other properties (like name) remain unchanged while only modifying the email property.