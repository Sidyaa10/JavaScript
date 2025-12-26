//Filtering an array
//This method is used to go through an array and filter out the elements that you want. Then returning a new array containing those elements.

const num=[1,2,3,4,5,6,7,8]

const evenNum=num.filter( num => num %2===0);
console.log(evenNum);// This filters out all the even numbers from the array and returns them in a new array.

const employees=[
    {name:'Sid', role:'Developer'},
    {name:'Sid1',role:'Manager'},
    {name:'Sid2',role:'CEO'},
    {name:'Sid3',role:'Developer'},
];

const developers=employees.filter(employee => employee.role==='Developer');
console.log(developers);
//This will return only the objects with role as developer.