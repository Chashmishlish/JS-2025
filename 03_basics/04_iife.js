// Immediately Invoked Function Expression (IIFE)
// Ek aisa function jo likhne ke baad foran execute ho jata hai bina usko manually call kiye.

function company (){
    console.log('DB CONNECT');
}
company(); //DB CONNECT


(function institute (){    //this function is named IIFE 
    console.log('DB CONNECTED');

}) (); //DB CONNECTED

//(function...(){....) => ye 1st paranthesis tw functionn ke definition ko enclosed krne k liye hain
// }) () => ye 2nd paranthesis iski execution call hai jese hum comany () per laga rhy the tow humne function ko wrap krdea
// ; semicolon is must for proper execution 

console.log(" ");
console.log(">>>>>ARROW FUNCTION>>>>");

// ( () => {
//     console.log(`DB CONNECTED TOO`);

// }) () //type error >> because humne semicolon nahi lagaya (); iske end me


(function software () {
    console.log(`DB CONNECTED TOO`);

}) (); //DB CONNECTED TOO


( () => {
    console.log(`YOUR DB IS CONNECTED `);

}) ();  //YOUR DB IS CONNECTED
//to end a code we need to put ; this at the end wrna next wala execute nai hoga func

( (name) => {         //this is a simple/unnamed IIFE
    console.log(`${name}, YOUR DB IS CONNECTED `);

}) ("Chashmish"); //Chashmish, YOUR DB IS CONNECTED 


