//Filter Function using an array

let name =['Sid','Sid1','Sid2','Sid','Sid3'];

const newName=name.filter((name)=>{
    return name !=='Sid'
})
console.log(newName);

//This will filter out all the Sid's from the array and print all other names.
//This how you can use filter function to romve elements from an array.
