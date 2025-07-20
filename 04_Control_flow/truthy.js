const userEmail = "h@alish.ai"

if (userEmail) {
    console.log("Got user email")
} else{
    console.log("Don't have user email");
} 

/*
output based on assumption => truthy and falsy values
[] => true , "" => false
Falsy values  => false, 0, -0, BigInt 0n, "" , null, undefined, NaN
Truthy values => True, "0", 'false', " " , [], {}, function(){}
function(){} => this is empty function and it comes under truthy values 
*/

// way of detection if it's empty or not
const userE = ''
if (userE.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if ( Object.keys(emptyObj).length === 0 ){
    console.log("Object is empty");
}

/* Nullish Coalescing Operator (??) : null, undefined
 kahen bar jab hum database se call krenge ya firebase, appright ka use krenge
 tow hume directly response nai milta hai, hume do values milte hain
 tow chances hain hoskta hai humare pass null response ajaye ya hoskta hai response aye he na(undefined)
 tow us case me apka pura ka pura code structure compromised hoskta hai tow un cases k liye ye banaya hy
 k values ko apko treat krna hai k acha null ho tw usme null assign krlo takay us hisab se case ko adjust 
 krlun mai or agar undefined hai tw thk hai wrna tw koi value assign krdo
 us special case me jo hum Database me agay ja kr prhen ge
*/
let val1;

val1 = 5 ?? 10
val2 = null ?? 10
val1 = undefined ?? 15


console.log(val1);


    



