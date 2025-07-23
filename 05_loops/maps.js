// maps returns values automatically

const myNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const newNumbers = myNumbers.map( (num) => num + 10 )
console.log("The numbers are added by 10:", newNumbers);

const newNumber = myNumbers.map( (num) => { return num + 20 })
console.log("The numbers are added by 20:", newNumber);
 
const newNumb = myNumbers.map( (num) => { 
    return num * 2
    })

console.log("The numbers are multiplied by 2:", newNumb);
// console.log(` The numbers are multiplied by 2:  ${newNumb}`);
 //JavaScript automatically converts the array to a string when it’s inside ${...}.


//we can also do it using for each
console.log(">>>>  using forEach  >>>>");

const newN = myNumbers.forEach( (num) => {
    return num + 10
})
console.log(newN);  //undefined

console.log(">>>>  Chaining  >>>>");

const newNums = myNumbers
                .map( (num) => num * 10 -  3 )     //it result pass into 2nd .map()
                .map( (num) => num + 1  )         // [8, 18, 28, 38, 48, 58, 68, 78, 88, 98]
                .filter( (num) => num >= 48)  // [ 48, 58, 68, 78, 88, 98 ]

console.log(newNums);
