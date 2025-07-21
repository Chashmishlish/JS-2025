//useful for arrays
// coding.forEach( function name ()  {} ) //since we have to include a call back func in forEach so we will remove the function name

const coding = ["Js", "ruby", "Cpp", "java", "swift", "CSS", "Html", "Python"]

coding.forEach( function (item)  {
    // console.log(item);
});

//arrow function -- arrow ka name store krne ke need nai hai qk ye callback function h
coding.forEach( (val) =>  {
    // console.log(val);
} )


//ForEach with Callback Function: printMe function ko seedha forEach ko de diya gaya hai. Ye reusable function hai.
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)

//ForEach with Inline Arrow Function: forEach ke andar direct ek function likh diya gaya hai jo har baar call hoga.
const framework = ["React" , "Angular", "Laravel"]
framework.forEach( (item, index ,arr ) => {
    console.log(item, index, arr);
})


// Below -> the concept is used in database 
const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "JS"
    },
    {
        languageName: "python",
        languageFile: "py"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
]

myCoding.forEach( (item) => {
    console.log(item);
})
myCoding.forEach( (item) => {
    console.log(item.languageName);
})


// --------
const values = framework.forEach( (item) => {
    console.log(item);
    
})
console.log(values); //it return undefined

const value = framework.forEach( (item) => {
    console.log(item);
    return item  //undefined
})
console.log(value); 

//This is because forEach is a “void method” - It does not return anything, no matter what you do inside it.