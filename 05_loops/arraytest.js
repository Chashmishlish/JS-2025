//Assignment - test arrays 
const nums = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9  ]
const number = nums.map( (num) => num + 10 )
console.log("The numbers are added by 10:", number);


const neNumbers = nums.map( (num) => { 
    return num + 10
    })
console.log("The numbers are added by 10:", neNumbers);


const newNum = nums.forEach( (num) => {
    return num + 10
})
console.log(newNum);  //undefined


let numbers = [1, 2, 3, 4, 5, 6];
function OddNum (numbers) {
            return numbers.filter ( (num) => num % 2 );
}
console.log(OddNum(numbers));

let nested = [1, [2, 3], [4, [5, 6]]];
function flattenArray(nested) {
  return nested.flat(9);
}
console.log(flattenArray(nested)); // [1, 2, 3, 4, 5, 6]

