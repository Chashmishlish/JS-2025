const accountId = 1234
let accountEmail = "alishba@gmail.com"
var accountPassword = "09876"
accountCity = "Islamabad" 
let accountState;
//bina variable k bhi variable ke memory reserve kre ja skte hy


// accountId = 2 //not allowed 

accountEmail = "alish@gmail.com"
accountPassword = "ak1212"
accountCity = "Lahore"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Another comments method in javascript 
Prefer not to use var
because of the issue in block scope and functional scope
*/

/// HEAD

//Redirecting in the same scope - using var
 var p = "Ono" 
 var p = "Uno" //No error! because redeclaration alloweded

 console.log(p);  //prints "Uno"

 //Redirecting in the same scope - using let
var q = "Oman" 
var q = "Ohio" //Syntaxrror! because let does not allow redeclaring in the same scope.

 console.log(q)  

 //Redirecting in the same scope - using const
const fruit = "lemon" 
fruit = "lime" //Typerror! 

 console.log(fruit) 


 
// terminal execution line: node 01_basics/01_variables
/// c1e6ad72176f5e7f31e5b9e9c4bd6253e3b54002

// yahan se nahi krskte?? VS se github p?
// vs se he to kera ha terminal per code line likhni perte hain to aap yaha se direct push ker diya karen ab error nh dega is folder me 
// okays
// means source control me aakr, uske baad + sign choose krun, msg box me kuc bhi message likhun then commit krke uske baad push it right?jeee jo box me likhta ha wo hota ha ka kiya changes  ya kiya kaam ker ka push kara ha wo git hub per show hota ha 
// okay
