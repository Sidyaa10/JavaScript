//String Method 

let sentence=' A new sentence ';

const doesIncludeNew= sentence.includes('new');
console.log(doesIncludeNew);// This is used to check if a word exists in a string or not

console.log(sentence[4]); //This is used to find out what is at index 4 in this case it will be 'S'

const startWithA= sentence.startWith('A');
console.log(startsWithA); // This is used to check if a string starts with A or not

const endWithE=sentence.endsWith('e');
console.log(endWithE);// This is used to check the last character of string

let updatedSentence =sentence.replace('new', 'short');
console.log(updatedSentence);// This is used to replace one word with another in this the word replaced is 'new' and the replacement is 'short'

trimmedSentence= sentence.trim();
console.log(trimmedSentence);// This is used to remove all spaces from both sides of the string
sentence.trimRight();// This is used to remove space only on right side
sentence.trimLeft(); // This is used to remove space only on left side

const wordInSentence =sentence.split(' ');
console.log(wordsInSentence);// This is used to split words into an array

let email='AbC@Gmail.com';

let lowerCaseEmail=email.toLowerCase();
console.log(lowerCaseEmail);// This is used to convert everything to lowercase

let upperCaseEmail= email.toUpperCase();
console.log(upperCaseEmail);// This is used to convert everything to uppercase



