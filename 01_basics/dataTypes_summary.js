// Primitive and Non-Primitive/reference type
// call by value and call by reference - in java , C languages
// difference : data memory me kis trhan se store hota hai
//              or kis trhan sy data ko access kr skte ho
//              isi basis per do categories hain datatypes ke

/*  Primitive
     7 types : String, Number, Boolean, Null (ek dum khaali, empty), Undefined, symbol (kisi value ko unique banane k liye), bigInt
     jitne bhi primitive type hain ye call by value hote hain
     means that jb bhi kahen se kahen copy krte hain tw inka original data hai
     wo refernce apko memory ka nahi dea jata, inko copy krke dea jata hai alag 
     or jo bhi changes krte hain wo copy me hote hain

*/

/* Reference Type {aka: Non - Primitive}
   1. Arrays
   2. Objects 
   3. Functions

   inka reference memory me directly allocate kea ja skta hai
   what is reference?
*/

// if u want to master JS - learn Objects and browser events 
// Assignment: Is JS dynamically typed or static?
// JavaScript is a dynamic language and not static, 
// which means that variables can hold values of different types during runtime. 
// Unlike languages such as Typescript or Java, 
// you don't need to declare the data type of a variable explicitly.

// decimal k liye koi special type nhi sab ke datatype same hai "number"
// null : completely empty
// undefined ; not initialized yet 

const id = Symbol ('123') //unique value
const anotherId = Symbol ('123') 

console.log(id === anotherId); //false,  means they are not same

// const bigNumber = 3456789993084874n //bigInt
// console.log ( bigNumber );

//Arrays , Objects , Functions

const heros = [ "Quaid-e-azam", "Allama Iqbal", "Sir Syed Ahmed Khan" ]; //array

let myObj = {
    name : "Alishba",
    age: 19, 
} //obj

const myFunction = function (){
    console.log ( "I am learning JS" );
    
}

console.log( typeof smallNumber); //false , undefined

const outsideTemp = null;
console.log( typeof outsideTemp ); //false , object 

console.log( typeof id); //symbol

console.log( typeof myFunction); //function / Object Function
console.log( typeof heros); //false , object

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function /  function(object)
       Object  =>  object
*/

// When you learn further prototype, function also acts as a object. Object is the parent one.
// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

