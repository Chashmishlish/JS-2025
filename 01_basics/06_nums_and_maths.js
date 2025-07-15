//algebra
const score = 400
console.log(score);

//sometimes we can define exclusively
//100% guarantee hai k number he dega ye
const balance = new Number (100)
console.log(balance); //[Number:100]

console.log(balance.toString()); //100
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00
console.log(balance.toFixed(5)); //100.00000


const otherNum = 123.9876
console.log(otherNum.toPrecision(9)); //123.987600

const otherNumber = 3006.0630
console.log(otherNumber.toPrecision(3)); //3.01e+3
console.log(otherNumber.toPrecision(9)); //3006.06300

const hundreds = 10000000
console.log(hundreds.toLocaleString()); //10,000,000
console.log(hundreds.toLocaleString('en-IN')); //1,00,00,000
console.log(hundreds.MIN_VALUE); //undefined
console.log(hundreds.Max_safe_integer); //undefined

// ============== Maths ============

console.log(Math); //Object [Math] {}
console.log(Math.PI); //3.141592653589793

//to change the - sign into +
console.log(Math.abs(-3)); //3


console.log(Math.round(4.6)); //5
console.log(Math.floor(4.2)); //4
console.log(Math.ceil(4.2)); //5

console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(5)); //2.23606797749979

console.log(Math.min(3, 4, 9, 0, 1, 5)); //0
console.log(Math.max(3, 4, 8, 0, 1, 5)); //8

//answer always be in b/w 0 and 1
console.log(Math.random( )); //0.8891976837555551
console.log(Math.random( )*10); //1.3706389954262566

const ranNum = 123;
console.log(Math.random()); //0.7077927971711773
console.log(Math.random()*10); //1.5970500899436546
console.log(Math.random()*10 + 1); //7.474426224521885
console.log((Math.random()*10) + 1); //8.574561768124635
console.log(Math.floor(Math.random()*10) + 1); 

//trick
const min = 10
const max = 20

console.log(Math.random() * (max - min + 1));
console.log(Math.floor(Math.random() * (max - min + 1))) + min;




