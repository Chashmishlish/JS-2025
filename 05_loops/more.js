const coding = ["JS" , "PY" , "CPP" , "HTML" , "CSS"]

const values = coding.forEach( (item) => {
    console.log(item);
})

console.log(values)  //undefined return kuch bhi nahi hua
// manaually return krwana parega

const code = ["JS" , "PY" , "CPP" , "HTML" , "CSS"]

const value = code.forEach( (item) => {
    console.log(item);
    return item
})

console.log(value)   //undefined
// again we saw the value undefined even after using the return
// agar hum     console.log(item); comment krden tb bhi undefined he ayega

console.log("It means FOR EACH () doesn't return any value ");

console.log(" ")
console.log(" FILTER()  ...It contains call back inside it and it can returns the value ")
console.log("Print All those numbers which are bigger than 5 on a scale of 1-10");

const myNum = [ 1,2,3,4,5,6,7,8,9,10 ]
const myNums = [ 1,2,3,4,5,6,7,8,9,10 ]

const newNums = myNum.filter( (num) => num > 5 )
console.log(newNums);

const newNum =  myNums.filter ((num) => {
    return num > 4
})
console.log(newNum);
console.log("Agar function me scope bana rahe hain tow return keyword ayega");

console.log(" ");
console.log(" Can also achieve the same array by using foreach() and .push");

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Original array
const newArr = []; // Empty array to store numbers > 4

myArr.forEach((num) => {
    if (num > 4) {
        newArr.push(num);
    }
});

console.log(newArr); 











