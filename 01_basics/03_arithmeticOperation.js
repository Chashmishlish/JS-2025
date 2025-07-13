let work = "running"
console.log(`The programming is ${work} successfully!`)

// arithmetic operators = operands (values, variables, etc..)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;


// augmented assignment operators
let students = 30;

students = students + 1; //prints 31
students = students - 1; //prints 30
students = students * 2; // prints 60
students = students / 2; //prints 30
students = students ** 2; //prints 900
students = students % 2; //prints 0
let extraStudents = students % 2; //print 0

//compound assignment operators
students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;


students ++; // Adds 1 → students = 31
students --; // Subtracts 1 → students = 30
 
console.log(students);  
console.log(extraStudents); //0

/* 
   Operator precedence
   1. Parenthesis ()
   2. exponents 
   3. multiplication & division & modulos
   4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result) //23

let results = 12 % 5 + 8 / 2;
console.log(results)

let res = 6 /2 ** 7;
console.log(res)

//Print Using an array []
console.table([`The A is ${result}`, `The B is ${results}`, `The C is ${res}`])

//Object with Keys { keys : values }
console.table({
  Ali: `The A is ${result}`,
  Bilal: `The B is ${results}`,
  Dani: `The C is ${res}`
});

