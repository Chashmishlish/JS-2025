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
