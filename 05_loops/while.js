/*
while (2=2) {
   ............... 
}
*/

let index = 0
while (index <= 10) {
    // console.log(`value of index is ${index}`);
    index = index + 2  //0 2 4 6 8 10
}

let myArray = ["Tanjiro" , "Nazuko" , "Urokodaki"]
let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is: ${myArray [arr]}`);
    arr = arr + 1
}

//Do - while loop ; kaam phele hoga, condition baad me check hogi

let score = 1

do {
    console.log(`Score is: ${score}`);
    score ++
} while (score <= 10);


let scored = 11

do {
    console.log(`You Scored: ${scored}`);
    scored ++
} while (scored <= 10);

