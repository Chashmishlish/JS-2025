/* For of => array specific loop

[ "" , "" , "" ]
[ {} , {} , {} ]

for (const iteration of object) {  
    //iteratin => variable name, object => kis object per loop lagana chah rahe hain
}
    */

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello Alishba!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

// Maps => Map itself is an object, similar like arrays , 
// koi duplicate value nai hote, unique values hold krta hai

const map = new Map()
map.set('PK', "Pakistan")
map.set('US', "States Of America")
map.set('FR', "France")
map.set('PK', "Pakistan")

console.log(map);

for (const key of map) {
    console.log(key);
}

//shortcut for not keeping it array form - destructure of array
for (const [key , value] of map) {
    console.log(key, ":-" , value );
}

