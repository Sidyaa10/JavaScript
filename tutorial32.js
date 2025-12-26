//Arrays
//Arrays are commonly used data structure which provides a lists of elements.

//Adding elements in an array

const num=[1,2,3,4,5];

num.push(6,7,8);//push adds the element at last position

num.unshift(-2,-1,0);// unshift adds the element at first position

num.splice (1, 0,-9)//splice adds the element at any position
console.log(num)