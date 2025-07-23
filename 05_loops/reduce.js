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
