//Two major Functions used to manipulate an array
//The functions are .map(),.filter()


const course =['JS','HTML','CSS','C++'];

const newCourse= course.map((course) =>{
    return course + "1";
});
console.log(newCourse);
//This will add 1 at the end of each element in the array
//This is how you can use map function to modify elements in an array.
