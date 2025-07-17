// jo bhi code likha hai, 10line ka 20 line ka usko ek package me band krdea
// wo package aap jitni baar jahan chahy utha kai uski copies le ja skte hain


//syntax //function ke definition hai ye
function sayMyName(){
   console.log("A");
   console.log("L");
   console.log("I");
   console.log("S");
   console.log("H");
} 

//for calling function 
// sayMyName () // () => execute  , sayMyName =>Reference

//for adding two numbers
function addTwoNumbers(number1 , number2){
    // number1 + number2  //add hogaya but print nai tow console.log krenge
    console.log(number1 + number2);   
}
// addTwoNumbers() //NaN, because num1, num2 me pta he nh kea value the, koi argument () he pass nhi kea 
addTwoNumbers(3, 14)      // 17
addTwoNumbers(3, "14")   // 314
addTwoNumbers(3, "A")   // 3A
addTwoNumbers(3, null) // 3


//(number1 , number2) => these are the parameters, parameter means input
//addTwoNumbers(3, null) => function calling k time per jo value pass hote hai wo argument hota h

// Concept of storing the function call in the variable 
function toadd (num1, num2) {
    console.log(num1 + num2);
}

toadd(3, 9) //12
const result = toadd(3, 3) //ye hogaya variable me store //6
// console.log("Result:", result); //undefined

//result k ander value undefined kese gayi? 
// yei interesting concept hai k, function se humne kya wapis bejha

// Okay so ways of writing functions
function add (numb1, numb2){
    let res = numb1 + numb2 //variable lenge console.log nai
    return res   //means jb mera func execute hojayega uske bd is res ko return krdo
}

const res = add(2, 8)
console.log("Result:", res) //Result: 10

// >> Execute nai hoga
function not_execute ( fun1 , fun2 ) {
    let notexecute = fun1 + fun2 
    console.log("Alishba"); //ALishba
    return notexecute
    // console.log("Alishba"); //ye execute nai hoga qk by default function ke definition ka
    //ek rule hota hy k return jo apne krdea uske bd koi kaam nai krega function
    
}
const notexecute = not_execute(10, 20)
console.log("Result:", notexecute) //Result: 30

