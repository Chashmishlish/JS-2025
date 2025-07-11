// for string
let score = 33;

console.log (typeof score); //way of checking the data type of a value or variable.
console.log (typeof (score)); //method

let valueInString = String(score)
console.log (typeof valueInString); 
console.log (valueInString); 

//for number
let scored01 = "abc33";
console.log (typeof scored01); 

let valueInNumber1 = Number(scored01)
console.log (typeof valueInNumber1); 
console.log (valueInNumber1);  // NaN 


//for number
let scored = "33";
console.log (typeof scored); //string

let valueInNumber2 = Number(scored)
console.log (typeof valueInNumber2); //number
console.log (valueInNumber2);  // 33

// for null
let scored_null = null
console.log (typeof scored_null);  //object

let valueInNumber3 = Number(scored_null)
console.log (typeof valueInNumber3); //number
console.log (valueInNumber3);  //0

// for undefined
let score_undefined = undefined
console.log (typeof score_undefined); //undefined

let valueInNumber4 = Number(score_undefined) 
console.log (typeof valueInNumber4); //number
console.log (valueInNumber4);  // NaN 

// for boolean
let score_boolean = true
console.log (typeof score_boolean); //boolean

let valueInNumber = Number(score_boolean) 
console.log (typeof valueInNumber); //number
console.log (valueInNumber);  // 1

//Printing table
console.table([
  {
    Variable: "score",
    OriginalValue: score,
    OriginalType: typeof score,
    ConvertedValue: valueInString,
    ConvertedType: typeof valueInString,
  },
  {
    Variable: "scored01",
    OriginalValue: scored01,
    OriginalType: typeof scored01,
    ConvertedValue: valueInNumber1,
    ConvertedType: typeof valueInNumber1,
  },
  {
    Variable: "scored",
    OriginalValue: scored,
    OriginalType: typeof scored,
    ConvertedValue: valueInNumber2,
    ConvertedType: typeof valueInNumber2,
  },
  {
    Variable: "scored_null",
    OriginalValue: scored_null,
    OriginalType: typeof scored_null,
    ConvertedValue: valueInNumber3,
    ConvertedType: typeof valueInNumber3,
  },
  {
    Variable: "score_undefined",
    OriginalValue: score_undefined,
    OriginalType: typeof score_undefined,
    ConvertedValue: valueInNumber4,
    ConvertedType: typeof valueInNumber4,
  },
  {
    Variable: "score_boolean",
    OriginalValue: score_boolean,
    OriginalType: typeof score_boolean,
    ConvertedValue: valueInNumber,
    ConvertedType: typeof valueInNumber,
  },
]);

// number can be easily conerted. "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

//convert into boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let isLoggedIn1 = ''  //false
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);


let isLoggedIn2 = "Alishba"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);

let isLoggedIn3 = " " //true
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);

let isLoggedIn4 = 12345
let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
console.log(booleanIsLoggedIn4);

//convert into string
let someNumber = 27
let stringNumber = String (someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// *******************  Operations  ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*7);
// console.log(2**3);
// console.log(2%3);
// console.log(2/2);

//concatination of two strings
let str1 = "hello"
let str2 = " alish"
let str3 = str1 + str2
// console.log(str3)


console.log ("1" + 2 )  //12
console.log ( 1 + "2")  //12
console.log ("1" + "2") //12
console.log ("1" + 2 + 2) //122
console.log (1 + 2 + "2") //32
// Ref: https://tc39.es/ecma262/2023/multipage/abstract-operations.html#sec-toprimitive

console.log(true); //true
console.log(+true); //1
//console.log(true+); //error
console.log(+""); //0

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2; //4 = 4 = 4

let gameCounter = 100;
gameCounter ++; //postfix
console.log(gameCounter)  //101

let gameCounterr = 100;
++gameCounterr; //prefix
console.log(gameCounterr)  //101








