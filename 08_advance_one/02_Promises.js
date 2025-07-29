// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Most Imp : The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// jo bhi task apko diya gaya hai wo queue me lagh gaya hai magar laghte he complete nai hoga

// 3 states of promises: pending, fulfilled, rejected
// mostly promises are consumed, bante kum hain consume zyda hote hain
// libraries : Q and blue bird but ab node js ne direct support dedea hai (native promises) 


// How promises are made
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task 
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    }, 1000);
})

// promise ko humne ek variable me store kea, create krlea ab consume krna hai
//.then ka straight connection hai resolve k saath .then k ander ek callback milta hai means function

promiseOne.then(function(){
    console.log("Promise consumed"); //ye tow print he nahi hua
})

// ab connect krenge in dono ko by resolve ()
// hum yehi kaam variable me store kre bina bhi krskte hain (see below)

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2!");
        resolve(); 
    }, 3000)
}).then(function(){
    console.log("Async 2 resolved!");
});


// to pass data
const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username: "Alishba" , email: "alishba@example.com"})
    }, 4000)
})

promiseThree.then(function(user){
    console.log(user); //{ username: 'Alishba', email: 'alishba@example.com' }
})