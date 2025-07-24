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

let Movienames = [ "Interstellar" , "Inception", "Deadpool", "Titanic", "Joker"];

const addMN = Movienames.splice(1, 0, "Hey Baby");
const remMN = Movienames.splice(1, 4, "Jurrasic world");
const repMN = Movienames.splice(1, 4);

console.log(addMN);
console.log(remMN);  
console.log(repMN);  
console.log(Movienames);

let fruits = [ "apple", "banana",  "mango", "banana", "Orange" , "Banana"];

let rem = fruits.indexOf("banana", fruits.indexOf("banana") + 1 , fruits.indexOf("Banana")); 
fruits.splice(rem, 1);
console.log(fruits); 


let names = ["Ali", "Hamaza", "Zara"];
console.log(names);
let reversed = names.reverse();
console.log(names);
console.log(reversed);

let num = [3, 5, 7, 10, ];
function evenNos (num) {
    return num.find( (i) => i % 2 == 0 );
}
console.log(evenNos(num));

let Myarray = [1, 2, 3, 4, 5];
let [a, b, ...rest] = Myarray;
console.log(a);    // 1
console.log(b);    // 2
console.log(rest); // [3, 4, 5]

// let arr = [1, 2, 3, 4, 5];
// let a = arr[0]
// let b = arr[1]
// let rest = arr.slice(2)
// console.log(a);    
// console.log(b);    
// console.log(rest);