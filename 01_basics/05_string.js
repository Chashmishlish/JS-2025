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

//Input form me aese spaces ajate hain mostly
const newStringOne = "    Alish    "
console.log(newStringOne); //consider spaces
console.log(newStringOne.trim()); //trim spaces/ignore spaces

//replace
const url = "https://Chashmishlish.com/Khanza%20lish"
console.log(url.replace('%20' , '-'))

//.includes is used to know whether the word is in our "" or not
console.log(url.includes('alish')) //false
console.log(url.includes('lish')) //true

//split
const gameNames = new String ('GTA-lish')
const personId = new String ('khanza-lish.com')

console.log(gameName.split('-'));
console.log(gameNames.split('-'));
console.log(personId.split('h'));
