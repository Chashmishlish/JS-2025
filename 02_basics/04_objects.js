//De Structuring
const course = {
    coursename: "JavaScript",
    price: "$999",
    courseInstructor: "Rohaid khan"
}
// course.courseInstructor =>syntax
const {courseInstructor} = course  //Rohaid Khan
const {courseInstructor: Instructor} = course  //Rohaid Khan

console.log(courseInstructor);
console.log(Instructor);

// concept for understanding ({}) = means destructuring kr rhy hyn
// const navbar = ({company}) => {

// }

// navbar(company = "Chashmish")

const navbar = ({company}) => {
  console.log(`Welcome to ${company} navbar!`);
}

navbar({ company: "Chashmish" }); //Output: Welcome to Chashmish navbar!

//APIS => jab bhi apne kaam kisi or k sir per dalna ho tw wo API
//Backend se kch values aati hain un values ko kese likhte hain that's API
// XML structure me aate then phele , ab JSON me aati hain

/* JSON
{
    name: "Alishba",
    coursename: "Biology",
    price: "free"
}
    */

//uRL : https://api.github.com/users/Chashmishlish

//API in Array
[
    {},
    {},
    {},
]

// API : https://randomuser.me/
//to understand JSON formata : json formatter => https://jsonformatter.org/
