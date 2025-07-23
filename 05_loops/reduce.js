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
