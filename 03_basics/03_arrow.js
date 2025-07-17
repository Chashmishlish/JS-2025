//this keyword: used for current context mtlb ek scope me jitne bhi variables 
// honge unko access krne k liye this. lagaen ge

const user = {
    username : "Abdullah",
    price: 999,

    WelcomeMessage: function(){
        console.log(`${this.username}, Welocme to Website`);
        console.log(this);
    }

}
user.WelcomeMessage()  //Abdullah, Welocme to Website

// user.username = "Minhal"
// user.WelcomeMessage()

user.username = "Minah"
user.WelcomeMessage()

console.log(this); //{} => qk hum node environment me hain qk abhi global scope me koi context he nai hai

// isi example ko dekhen web browser k console per iska output -window ayega
// browser me jb bhi engine run krke ga tow wahan global object window object hai

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function chai (){
    console.log(this) 
}
chai() // bht saari values ajaenge


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//aese function me aakr this use nai kr pa rahe hain isliye undefined aya hai
// ye context object me he kaam krrha hai
function chai (){
    let username = "Palishba"
    console.log(this.username) //undefined
}
chai() 


console.log(">>>>>>>  ARROW FUNCTIONS  >>>>>>>>");
const coffee = () => {
    let username = "Kalish"
    console.log(this); // {}
    console.log(this.username) //undefined
}
coffee()

console.log("  ") 
console.log( "SYNTAX OF ARRO FUNCTION () => {} ");

const addTwo = (num1 , num2 ) => {
    return num1 + num2 
}

console.log(addTwo(3, 5)); //8

console.log("  ") 
console.log(" IMPLICIT RETURN ") 
// isme paranthedis use nai krne prhte hain
// implicit means mai maan leta hun tow apko return keyword likhne ke need nai hai
//  const mul = (num1 , num2) => num1 * num2    //one way
    const mul = (num1 , num2) => (num1 * num2) //another way


 console.log(mul(3, 5)); //15

 //curly bracket use krenge tw return keyword likhna parega => explicit return
 //parenthesis krenge tow return keyword nai likhna huga => implicit return


console.log("  ") 
console.log(" To return an Object") 
    // const detail = (num1 , num2) => {username: "Sara" } //undefined
       const detail = (num1 , num2) => ({username: "Sara"}) //{ username: 'Sara' }

console.log(detail());

/*
 Arrow functions usage

const myArray = [2, 3, 4, 5, 6]

myArray.forEach(function() {} )
myArray.forEach(() => {} )
myArray.forEach(() => () )

*/
console.log("  ") 
console.log(" More Examples using Array") 
const myArray = [2, 3];

myArray.forEach(function(element) {
  console.log("Anonymous function:", element);
});                      // Anonymous function


myArray.forEach((element) => {
  console.log("Arrow function with block:", element);
});                      // Arrow function with block


myArray.forEach((element) => (
  console.log("Arrow function implicit return:", element)
));                // Arrow function with implicit return
