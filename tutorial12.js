//Condtional statements
let age=25;
let adultPerson=18;

const canVote= age>=adultPerson;
console.log(canVote);

if (canVote){
    console.log('You are eligible to vote');
}else{
    console.log('You are not eligible to vote');
}
// This is how you utilise theIf else statement in javascript

let marks=83;

if(marks>90 && marks<=100){
    console.log('A+', 'Outstanding work');
}else if(marks>80 && marks<=89){
    console.log('A', 'Excellent work')
}else if(marks>70 && marks<79){
    console.log('B+', 'Great job');
}else if(marks>58 && marks<=69){
    console.log('B', 'Good but can do better');
}else if(marks>45 && marks<=57){
   console.log('C', 'Improvement needed');
}else if(marks>=35 && marks<=44){
    console.log('D', 'Walking on thin ice');
}else{
    console.log('F', 'Failed Appear for a retest');
}