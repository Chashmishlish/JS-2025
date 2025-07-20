/* if statement 
if (condition){
    ...................
}
if condition is true then the code inside { } will be exeuted
if condition is false then the code inside {} won't be executed

Operators of comparison : < , > , <= (2<=2) , >= , ==
= ; operator assignment , == ; to check whether it is equal, != ; not equal
eg: (3 != 2) = true
*/


const isUserloggedIn = true
const temperature = 41

if ( temperature < 50 ) {
    console.log("less than 50") //less than 50
} 
console.log("temperature is greater than 50") //temperature is greater than 50


if ( temperature < 50 ) {
    console.log("less than 50") //less than 50
} else{
    console.log("temperature is greater than 50") 
}
console.log("executed"); //executed ; 
// ye block k bahar wala console print hoga he hoga

if ( temperature < 40 ) {
    console.log("less than 50") 
} else{
    console.log("temperature is greater than 50")  //"temperature is greater than 50"
}
console.log("executed"); //executed ; 

if (3 != 4){
    console.log("3 is not less than 4"); //3 is not less than 4
}else{
    console.log("3 is less than 4");
}

const score = 300
if (score > 100 ) {
    let  power = "fly"
    console.log(`User power: ${power}`) //User power: fly
}
// console.log(`User power: ${power}`) // Ref error: power is not defined
// this is because of scope

//short hand notation => here implicit scope exists
// this method is not a good practice

const balanced = 1000
if (balanced > 500) console.log("test"); //test

const money = 5000
if (money > 3000) console.log("test"), console.log("test2"); //execute hojayega

const money2 = 5000
if (money2 < 3000) console.log("test"), console.log("test2"); //execute nhi hoga


// nested 
const balance = 1000
if (balance < 500) {
    console.log("less than 500"); //flase - less than 500
} else if(balance < 750){
    console.log("less than 750") // false - less than 750
} else if (balance < 900) {
    console.log("less than 900"); //false
}
console.log("Less than 1200"); // true





