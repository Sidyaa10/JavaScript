// Question 3: Implement two functions. For the first function, have it accept an array as a parameter which contains a list of numbers.Then console.log the even numbers in th array.
// For the second function, have it accept an array as a parameter which contains a list of numbers and then return a new array with only odd numbers from that input array.

let arr=[1,2,3,4,5,6,7,8,9,10];
function evenNums(arr){
    for (let i=0;i<arr.length;i++){
        if(i%2===0){
            continue;
        }
        console.log(arr[i]);
     };
}

let arr1=[1,2,3,4,5,6,7,8,9,10];
function oddNums(arr1){
    for(let j=0;j<arr1.length;j++){
        if(j%2!==0){
            continue;
        }
         console.log(arr1[j]);
    }
}

evenNums(arr);
oddNums(arr1);