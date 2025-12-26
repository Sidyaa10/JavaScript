//Getters and setters
//The get and set keywords can be used within an object literals or classes in order to define getters and setters.
//This enables us to use method as if it were a property.
//Pros of using getter and setter is that it can improve data incapsulation and provide a more intuitive interface for interacting with an objects properties
const course={
    name:'JavaScript for Beginners',
    duration:'3 Hours',
    get details(){
        return `${this.name} is a ${this.duration} long course.`;
    },
    set details(value){
        let parts = value.split(' is ');
        this.name=parts[0];
        this.duration=parts[1];
    }

};

course.details='JavaScript Pro is 10 Hours';

console.log(course.details);