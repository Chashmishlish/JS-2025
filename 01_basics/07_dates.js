let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
console.log(typeof myDate) //object

let myCreatedDate = new Date (2004, 0, 29)
console.log(myCreatedDate.toDateString());

let myCreatedDatee = new Date (2003, 2, 6)
console.log(myCreatedDatee.toDateString());

let myCreatedDateee = new Date (1967, 5, 25)
console.log(myCreatedDateee.toDateString());

let myCreatedDateeee = new Date (1969, 7, 2)
console.log(myCreatedDateeee.toDateString());

let myCreatedDate1 = new Date (2004, 0, 29, 5 , 3)
console.log(myCreatedDate1.toLocaleString()); //1/29/2004, 5:03:00 AM

let myCreatedDate2 = new Date ("2003-00-15") //jan--01
console.log(myCreatedDate2.toLocaleString()); //Invalid Date

let myDated = new Date ("01-15-2023") //jan--01
console.log(myDated.toLocaleString()); //1/15/2023, 12:00:00 AM


//must understand
let myTimeStamp = Date.now()
console.log(myTimeStamp); //1752589368693 millisecond

let createdDate = new Date("01-15-2025")
console.log(createdDate.getTime()); //comparison in milisec
console.log(Date.now()/1000); //seconds
console.log(Math.floor(Date.now()/1000)); 


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time`
console.log(`The month is: ${newDate.getMonth()+1 } and the day is ${newDate.getDay()}`);

console.log(newDate.toLocaleString('default' , {
    weekday: "long", //Tuesday
}))
