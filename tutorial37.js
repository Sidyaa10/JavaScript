//Sorting Arrays

let char=['c','d','a','b','e'];
char.sort(); //sorts the array in alphabetical order
char.reverse();//reverses the sorted array  
console.log(char);

//Sorting an array of an object

let employees=[
    {id:1, name:'Sid'},
    {id:2, name:'Vid1'},
    {id:3, name:'Bid2'},
    {id:4, name:'Cid3'},
];

employees.sort((a,b) =>{
    const lowerCaseA = a.name.toLowerCase();
    const lowerCaseB= b.name.toLowerCase();
    if(lowerCaseA < lowerCaseB) return -1;
    if(lowerCaseA > lowerCaseB) return 1;
    else return 0;
});

console.log(employees);// This is will sort the names alphabetically