// In node environment, scopes behaves differently 
// In browser's concole, they behaves differently 
/*
   Scope ke rules browser aur Node.js dono mein same hain kyunke 
   dono JavaScript ke standard rules follow karte hain.

 Lekin…
   - Browser aur Node.js global objects aur modules ko alag tareeke 
     se handle karte hain, isliye tumhe lagta hai ke scope ka behaviour 
     thora different hai.
   - Browser mein global object window hota hai.
   - Node.js mein global object global hota hai aur Node har file ko ek 
     function wrapper ke andar run karta hai, isliye global variables 
     direct global nahi hote.
*/
// {} => these curly braces are the scope, in if-else, functions, loops
// wahan ek alag scope banta hai

if (true) {
    let a = 10
    const b = 20 
    // console.log("Value:", a); //Value: 10
}
// console.log(a); //ReferenceError: a is not defined'

const b = 200
//  b = 400    // TypeError: Assignment to constant variable.
if (true){
    const b = 20
    // console.log("Value:", b); //value: 20
}
// console.log(b) //200

//Nested scope
function one (){
    const username = "Alishba" 

    function two(){ //ye bahar k variables ko access krskta hai
        const website = "youtube"
        console.log(username); //username isliye qk hum dekhna chahte hain k is specific block me reh kr username ko access kra ja skta h?
    }
    // console.log(website); //ReferenceError: website is not defined at one

    two()  //Alishba
}

// one()

if (true){
    const username = "Alish"
    if( username == "Alish") {
        const website = " google"
       // console.log(username + website); //Alish google
    }
    // console.log(website); //error
    
}
// console.log(username); //error

// >>>>>> INTERESTING >>>>>>

//make function this way
console.log((addOne(5))); //6

function addOne (num){      //yahan just func ko declate kea hai 
    return num + 1   
}
//addOne(5)

//make function this way too
console.log((addTwo(5)));  //error ; Cannot access 'addTwo' before initialization
const addTwo = function(num){       //yahan variable me bhi dal dea h 
    return num + 2 
} 

// addTwo(5)

//isko kehte hain hoisting 