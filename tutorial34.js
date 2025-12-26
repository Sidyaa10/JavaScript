//Finding Elements Objects(Reference Types)

const employees=[
    {
        id:1,
        name:'Sid'
    },
    {
        id:2,
        name:'Sid1'
    },
    {
        id:3,
        name:'Sid3'
    },

];

const employee= employees.find(function(e){ //.find method is used to find the object in an array of objects
    return e.name ==='Sid';
});

console.log(employee);

//Arrow Function 

const employee1 = employees.find((e) => e.name ==='Sid1');
console.log(employee1);
//This is a arrow function which does the same thing as above but it is more concise and easier to read.