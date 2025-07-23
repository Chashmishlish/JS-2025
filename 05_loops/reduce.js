// accumulate : gather together or acquire an increasing number or quantity of.
// accumulator : a register, or a memory location used to store the intermediate results of arithmetic and logical operations.
// In JavaScript, an accumulator is just a variable that keeps a running total or combined result during a loop or operation.
// Think of it like a box where we keep adding things as we loop. 📦

const myNums = [ 1, 2, 3 ]

const myTotal = myNums.reduce( function (accumulator, currentVal) {
    console.log(`Accumulator: ${accumulator} and Current Value: ${currentVal}`);
    return accumulator + currentVal //atm, accumulator doesn't know where to start

}, 0)   //0 is the accumulator value

console.log(myTotal);

console.log(" >>>> USING ARROW FUNCTION >>>>> ");

const myttl = myNums.reduce ( (acc , curr) => acc+curr , 4 )
    // console.log(`Accumulator: ${acc} and Current Value: ${curr}`); //won't access like this without using return, and always access before return line means write this code above return 
console.log("When the number is 4:" ,myttl);

const myttll = myNums.reduce ( (acc , curr) => { return acc+curr} , 3 )
console.log("When the number is 3:" , myttll);


console.log(" ");
console.log(">>>>> Example Of Shopping Cart >>>>>");

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999,
    },
    {
        itemName: "Py Course",
        price: 3999,
    },
    {
        itemName: "DevOps Course",
        price: 5999,
    },
    {
        itemName: "DS Course",
        price: 12999,
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);


console.log(" ");
console.log(" >>>> FIND THE MAX NUMBER >>>> ");

const numbers = [10, 45, 2, 78, 34];
const max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, numbers[0]);

console.log(max); // 78


console.log(" ");
console.log(" >>>> Multiplication Table of 2 >>>> ");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tableOfTwo = nums.reduce((acc, curr) => {
    acc.push(`2 x ${curr} = ${2 * curr}`);
    return acc;
}, []);

console.table(tableOfTwo);


console.log(" ");
console.log(" >>>> Odd Numbers >>>> ");

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = number.reduce((acc, curr) => {
    if (curr % 2) acc.push(curr);
    return acc;
}, []);

console.log(oddNumbers); 


console.log(" ");
console.log(" >>>> Even Numbers >>>> ");

const EvenNumbers = number.reduce((acc, curr) => {
    if (curr % 2 == 0) acc.push(curr);
    return acc;
}, []);

console.log(EvenNumbers); 