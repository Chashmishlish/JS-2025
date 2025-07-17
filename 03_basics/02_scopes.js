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


if (true) {
    let a = 10
    const b = 20 
    console.log("Value:", a); //Value: 10
}
console.log(a); //ReferenceError: a is not defined'

const b = 200
//  b = 400    // TypeError: Assignment to constant variable.
if (true){
    const b = 20
    console.log("Value:", b); //value: 20
}
console.log(b) //200



