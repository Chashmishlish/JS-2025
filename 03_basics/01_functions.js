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

// >> Execute nai hogaed In

// >> if, else 
    // we can check by using if statement , k kiya wo value hai k nai
//agar result true hai tw means value mojood hai

function loginPassword (setpassword){
    if(setpassword === undefined) {
        console.log("Please enter the password")
        return //ye krne se neeche wala return execute nai hoga
    }
    return ` Your Password is: ${setpassword} `
}

console.log(loginPassword( ));

function loginPassword (mypassword){
    if(mypassword === undefined) {
        console.log("Please enter the password")
        return 
    }
    return ` Your Password is: ${mypassword} `
}

console.log(loginPassword( " olala" ));
function not_execute ( fun1 , fun2 ) {
    let notexecute = fun1 + fun2 
    console.log("Alishba"); //ALishba
    return notexecute
    // console.log("Alishba"); //ye execute nai hoga qk by default function ke definition ka
    //ek rule hota hy k return jo apne krdea uske bd koi kaam nai krega function
    
}
const notexecute = not_execute(10, 20)
console.log("Result:", notexecute) //Result: 30

// >> another method
function anotherMethod ( m1, m2 ) {
    return m1 * m2
    
}
const am = anotherMethod(10, 10)
console.log("Result:", am) //Result: 100

// Writing some other functions
function loginUserMessage (username){
    return `${username} just logged In`
}

loginUserMessage("Alishba khan") // nothing will execute on this point bcz of no printing msg
console.log(loginUserMessage("Alishba khan")); //Alishba khan just logged In
console.log(loginUserMessage(" ")); //just logged In
console.log(loginUserMessage()); //undefined just logg

/*
 in if statement () => parenthesis me we check values
 in { ..... } => curly braces, we execute the code

 if (undefined)  =>output : false value
 if (" ") => false value , liken agar false value hogi tw {....}is block me hum jaenge he nahi
 {....} is block me sirf tbhi jaate hain jab humare pas true value ho
 tow aese me code kuch is trhan likhen ge if (!username ) {...} 
 ! => not
*/

function logIn (username){
    if(!username){
        console.log("Please enter a username"); //please enter username
        return 
    }
    return `${username} you are logged in! ` //undefined
}

console.log(logIn(  ));

//   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function loggedIn (username = "Roma"){
    if(!username){
        console.log("Please enter a username"); //ye block run he nai hoga
        return 
    }
    return `${username} just logged in! `
}

console.log(loggedIn(  )); // Roma just logged in
// agar argument me koi value pass krde tow wo roma ko over-write krdegi
console.log(loggedIn( "Resham" )); //Resham just logged in

//Shopping cart in ecommerce website
// user add kre ja raha hai items aur hume nai pata kitne arguments aane walay hain
// tow parameter tyar krne prte hain

function calculateCartPrice (num1){
    return num1 
}
console.log(calculateCartPrice(200, 300, 400)); //200 
//only 200 is executing rest of the values aren't

/*
//bht saari values pass krne hain tow parameter ko bhi usi hisab se set krna padega
    function calculateCartPrice (...num1){  
    yahan hum (...) teen dots laga den ge which is called rest operator 
    It is also called spread operator based on its use casee
 */

function calculatePrice (...num1){
    return num1 
}
console.log(calculatePrice(200, 300, 400)); //  [ 200, 300, 400 ]
//aese functional me multiple values/parameters pass hote hain

//INTERVIEW Ques
function calPrice (val1, val2, ...num1){
    return num1 
}
console.log(calPrice(200, 300, 400, 2000, 4300)); //  [ 400, 2000, 4300 ]
// yahan per val1 = 200, val2 = 300, ...num1 => baki jo bachay ga wo sb isme ayeg



// > Function in Object 
const user = {
    username: "Alishba",
    price: 199
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user); //Username is Alishba and price is 199
//directly bhi object pass krskte hain
handleObject({
    username: "Chashmish",
    price: 999
})  //Username is Chashmish and price is 999

/*
   type safety check krne parhte hai objects me, 
   mtlb agar object jo banaya hai usme price ke jagah prices likhdea tow output undefined ayega
   typescript me ye type checking hojati hai, jS me bhi hojate hai but code length increase hojate if else use krna prhta
*/

//arrays passing in function
const myNewArray = [200, 300, 500, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray)); //500
console.log(returnSecondValue([100, 200, 300, 500, 1000])); //300



