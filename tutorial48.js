//Try and Catch block
//Try Catch blocks are used for defensive programming
//In the case when you are executing code that may throw an error, you can use try catch to handle it gracefully.

const course={
    name:'JavaScript for Beginners',
    duration:'3 Hours',
    get details(){
        return `${this.name} is a ${this.duration} long course.`;
    },
    set details(value ){

        let parts = value.split(' is ');
        this.name=parts[0];
        this.duration=parts[1];
    }

};
try{
course.details=42;
}catch(err){
    console.log(`Error 404: ${err.message}`);
}
console.log(course.details);