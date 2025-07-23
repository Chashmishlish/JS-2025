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

console.log(" "); 
console.log("Values coming from database - example of books"); 

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2015, edition: 2020 },
  { title: 'Book Nine', genre: 'Fiction', publish: 2021, edition: 2022 },
  { title: 'Book Ten', genre: 'Non-Fiction', publish: 2005, edition: 2011 }
];

const userBooks = books.filter ( (bk) => bk.edition == 2022  )
console.log(userBooks);













