//singleton
// Object.create //constructor method

//object literals 

const mySym = Symbol("key1") //symbol =>datatype , interview concept


const JsUser = {
    First_name: "Alishba",
    last_name: "Khan",
    "full name": "Alishba Khan",
    mySym: "mykey1", //aese access nai hota
    [mySym] : "mykey1", //aese hojayega with correct data type [Symbol(key1)]: 'mykey1'
    location: "Karachi",
    age: 19,
    Email: "alishbakhan@koogle.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.Email) //not much good method
console.log(JsUser["Email"]) //use this method
console.log(JsUser["full name"]) //we can access full name by using [""] this method
// console.log(JsUser."full name") //we can't access full name by using dot

console.log(JsUser.mySym); //mykey1 is the output but in actual it's no used as symbol
console.log(JsUser[mySym]); // "mykey1" 

console.log(typeof JsUser[mySym]);   // string (value type)
console.log(typeof mySym);          // symbol   (key type)

// agar hume mysym: "mykey1" ko symbol ke trhan use krna hai tow object me hume.....
// [mySym]: "mykey1"; yahan [] square braces lagane parenge

//how to change the value of object
JsUser.Email = "khanzalish@chatgpt.com"

// Object.freeze(JsUser) //changes won't propogate by using this command 
JsUser.Email = "chashmish@microsoft.com" //ye execute ya impose nai hoga

console.log(JsUser); 

//how to add function in objects
JsUser.greeting = function(){
    console.log("Hello JS users");
}

console.log(JsUser.greeting); //[Function (anonymous)] => this is a reference of func
JsUser.greeting(); //Hello JS users

// console.log(JsUser.greeting()); //error => not a function
// comment out this => Object.freeze(JsUser) isliye hello js user print ni hua

// Another function
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
    console.log(`From, ${this.location}`);
}
JsUser.greetingTwo();

// Object with the help of constructor 
const linkedlnUser = new Object () // {}
const tinderUser = {}  //{}

linkedlnUser.id = "1o1"
linkedlnUser.name = "Jacky shaky"
linkedlnUser.isLoggedIn = false

tinderUser.name = "Sharma ji"
tinderUser.age = 75
tinderUser.finding = "young girl"

console.log(linkedlnUser); //{ id: '1o1', name: 'Jacky shaky', isLoggedIn: false }
console.log(tinderUser);   //{ name: 'Sharma ji', age: 75, finding: 'young girl' }

