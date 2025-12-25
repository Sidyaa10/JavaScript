//Ternary Operator is a conditional operator that assigns a value to a variable based on some condition. It is also known as the Conditional Expression, or simply Ternary Expression.
let age= 18;
const legalDrivingAge = age>=16 ?"Legal" :"No Illegal";
console.log(legalDrivingAge);

let marks=55;
const grade=marks>80 ?"A":"B+";
console.log(grade);
// This is how we can use ternary operators in our code

//Logical Operators are used to combine two or more conditions.
// Four logical operators are && (AND), || (OR), ! (NOT) and ?? (Nullish Coalescing).
//&& (AND operator): Returns true if both operands are true otherwise returns false.
console.log(true && true); //true
console.log(false && false);//false
console.log(true &&false);//false
console.log(false && true);//false

let reservedSeat=true;
let acceptWalkins=false;

const seatAvailable=reservedSeat&&acceptWalkins;//false
console.log(seatAvailable);

//|| (OR operator): Returns true if either of the operand is true otherwise returns false.
console.log(true || true);//true
console.log(false || false);//false
console.log(true || false);//true
console.log(false || true);//true

let hasTicket=true;
let hasPassport=false;
const travelAllowed=hasTicket||hasPassport;//true
console.log(travelAllowed);

//! (NOT operator): Returns true if the operand is false or vice versa.
console.log(!true);//false
console.log(!false);//true

console.log(!(2===3));//true
console.log(!(4<7));//false

//?? (Nullish Coalescing operator): Returns first argument if it's not null or undefined otherwise returns second argument.
console.log(null ?? "Hello");//Hello
console.log(undefined ?? "World");//World
console.log("Hi" ?? "Bye");//Hi