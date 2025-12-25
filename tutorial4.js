// Object is a fundamental data type in javascript used to store data in the form of key-value pairs.
//Objects are reference types used to reprsent nouns(person,place or thing)
let course={
    name: 'javascript',
    duration: '3 months',
    hours:20,
}
console.log(course.name, course.duration,course.hours);
// This is how we access the properties of an object by writing the name of the object and then dot notation followed by property name(course.name)

course.price=7000;
console.log(course['price']);
// We can also add new properties to objects using this method and represent them with square brackets instead of dot notation.

