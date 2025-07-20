/* if statement 
if (condition){

}
if condition is true then the code inside { } will be exeuted
if condition is false then the code inside {} won't be executed

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


/*
Operators of comparison : < , > , <= (2<=2) , >= , ==
= ; operator assignment , == ; to check whether it is equal, != ; not equal
eg: (3 != 2) = true
*/