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

val1 = 5 ?? 10             //5
val2 = null ?? 10         //10
val1 = undefined ?? 15    //15
val1 = null ?? 10 ?? 100  //10

console.log(val1);


/*
Terinary Operator 
condition ? true statement : false
*/

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

