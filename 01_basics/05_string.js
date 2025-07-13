//string syntax
const name = "Alishba" //string declaration 1st way
const repoCount = 50

console.log(name + " " + repoCount + " Value");

//another syntax ; more readible and modern
console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`)


//String declaration - 2nd way
const gameName = new String ('Counter Strike') //new => object use krrhe hain String() ye constructor hai
// accessing key value
console.log (gameName[0]); //c 
// accessing prototype
console.log (gameName.__proto__); 

//how to use objects
console.log (gameName.length); //14 
console.log (gameName.toLowerCase()); //counter strike
console.log (gameName.toUpperCase()); //COUNTER STRIKE
//.charAt => to check which character is at this (2) position
console.log (gameName.charAt(2)); //u

//.indexOf() => to check the position of character
console.log (gameName.indexOf('e')); //5
console.log (gameName.indexOf('i')); //11
console.log(gameName.lastIndexOf('r')); // 10
console.log(gameName.indexOf('r')); // 6

// const gameName = new String ('Counter Strike') 
const newString = gameName.substring(0, 5)
console.log(newString) //Count

const anotherString = gameName.slice(-8, 5)
console.log(anotherString) // ""  (start > end = empty)

const anotherString1 = gameName.slice(3, 5)
console.log(anotherString1) // nt


let str = "JavaScript";
// substring
console.log(str.substring(4, 1)); // ava (swap kiya 1,4 => 1,4)
console.log(str.substring(-5, 4)); // Java (negative ignore)
// slice
console.log(str.slice(4, 1)); // "" (start > end = empty)
console.log(str.slice(-5, -1)); // crip (end se count kiya)
