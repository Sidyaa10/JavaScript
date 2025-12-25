//Switch Statement provide a clean syntax for multiple conditions.
let job='Web-Designer';

switch(job){
    case 'Software Developer':
        console.log('Writes Code');
        break;

    case 'Teacher':
        console.log('Teaches Students');
        break;

    case 'Doctor':
        console.log('Treats People');
        break;
    default:
        console.log('Does something else');
        break;
}
//This is a switch statement. It's like an if/else statement but it's more efficient.
//Case is used to check if the variable matches with any of the cases.
// Break means that the code will stop running when it reaches the break keyword.