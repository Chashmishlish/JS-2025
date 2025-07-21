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


