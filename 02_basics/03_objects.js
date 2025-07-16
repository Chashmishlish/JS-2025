//singleton
// Object.create //constructor method

//object literals 



const JsUser = {
    First_name: "Alishba",
    last_name: "Khan",
    "full name": "Alishba Khan",
    mySym: "mykey1", //aese access nai hota
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

