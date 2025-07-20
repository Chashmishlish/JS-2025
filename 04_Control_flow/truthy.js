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




    



