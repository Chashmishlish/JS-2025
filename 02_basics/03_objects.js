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

//Object inside Object

const regularUser = {
    Email : "mirza@gmail.com",
    fullname: {
        userfullname: {
            First_name: "Mirza",
            last_name: "Baig"
        }
    }
}

console.log(regularUser.fullname); //{ userfullname: { First_name: 'Mirza', last_name: 'Baig' } }
console.log(regularUser.fullname.userfullname); //{ First_name: 'Mirza', last_name: 'Baig' }
console.log(regularUser.fullname.First_name); //undefined

console.log(regularUser.fullname.userfullname.First_name); //Mirza
console.log(regularUser.fullname.userfullname.last_name); //Baig
console.log(regularUser.Email); //mirza@gmail.com

// Question mark case will be discussed further
console.log(regularUser.name?.userfullname); //undefined

//Combine/merge objects
const objectOne = {1: "axe", 2:"yatch"}
const objectTwo = {3: "ox",  4:"fox"}
const objectFour = {5: "Van",  6:"Pan"}

const objectThree = { objectOne, objectTwo } //array wali problem will occur here too
console.log(objectThree); //output: object inside object 

//another syntax
const objt = Object.assign(objectOne, objectTwo)
console.log(objt); // { '1': 'axe', '2': 'yatch', '3': 'ox', '4': 'fox' }

//another syntax
const objtt = Object.assign({}, objectOne, objectTwo, objectFour) //{} =>optional parameter
console.log(objtt); // { '1': 'axe', '2': 'yatch', '3': 'ox', '4': 'fox' }

//If we keep the keys same
const KeyValue1 = {1: "Akar", 2: "Bakkar" , 3:"bambay" }
const keyValue2 = {3: "Boo", 4:"Assi-Naway", 5: "Pooray-Soo"}

const K_values = Object.assign({}, KeyValue1, keyValue2)
console.log(K_values);

/*
Output:
{
  '1': 'Akar',
  '2': 'Bakkar',
  '3': 'Boo',
  '4': 'Assi-Naway',
  '5': 'Pooray-Soo'
}
*/

//spread operator
const value1_2 = {...KeyValue1 , ...keyValue2}
const value2_1 = {...keyValue2 , ...KeyValue1}
console.log(value1_2);
console.log(value2_1);

/*
Output
{
  '1': 'Akar',
  '2': 'Bakkar',
  '3': 'Boo',
  '4': 'Assi-Naway',
  '5': 'Pooray-Soo'
}
{
  '1': 'Akar',
  '2': 'Bakkar',
  '3': 'bambay',
  '4': 'Assi-Naway',
  '5': 'Pooray-Soo'
}
*/

//jab database se values ayenge tw ese ayenge => arrays of object
const users = [
    {  
    id: 1,  //array => object (inside)
    email: "pookie@gmail.com"
    },
    {
    id: 1,
    email: "pookie@gmail.com"
    },
    {
    id: 1,
    email: "pookie@gmail.com"
}
]

console.log(" ");
users[1].email
console.log(tinderUser);

//to access all the keys
console.log(Object.keys(tinderUser)); //[ 'name', 'age', 'finding' ]

//to acces all the values
console.log(Object.keys(linkedlnUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(linkedlnUser)); //[ '1o1', 'Jacky shaky', false ]
console.log(Object.entries(linkedlnUser)); //[ [ 'id', '1o1' ], [ 'name', 'Jacky shaky' ], [ 'isLoggedIn', false ] ]
console.log(Object.entries(linkedlnUser).length); //3

//How to use length property
// console.log(Object.length(linkedlnUser));  //error
const googleUser = {
  name: "Alishba",
  age: 19,
  city: "Karachi"
};

console.log(Object.keys(googleUser).length);  //3
console.log(Object.values(googleUser).length); //3
console.log(Object.entries(googleUser).length); //3

//looping in object
//agar value exists na kre tow how to ask
console.log(tinderUser.hasOwnProperty('designation')); //false
console.log(tinderUser.hasOwnProperty('age')); //true



