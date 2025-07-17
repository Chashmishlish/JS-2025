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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
