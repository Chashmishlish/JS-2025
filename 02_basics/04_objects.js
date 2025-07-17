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



