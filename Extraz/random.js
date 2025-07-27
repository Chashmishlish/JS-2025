// Random number generator

let RandomNum = Math.floor(Math.random() * 6 ) + 1;

console.log(RandomNum);

// by adding +1 it will give us numbers from 1 to 6
// by using math.floor we can obtain numbers in integers
// by using only math.random , we were generating floating numbers as well

const min = 50;
const max = 100; 

let ranNum = Math.floor(Math.random() * (max  - min)) + min;
let ranNumm = Math.floor(Math.random() * max) + min;  //146, 59, 122

console.log(ranNum);
console.log(ranNumm);

// (max  - min) ; number should be b/w 50 and  100 

