//useful for arrays
// coding.forEach( function name ()  {} ) //since we have to include a call back func in forEach so we will remove the function name

const coding = ["Js", "ruby", "Cpp", "java", "swift", "CSS", "Html", "Python"]

coding.forEach( function (item)  {
    console.log(item);
});

//arrow function -- arrow ka name store krne ke need nai hai qk ye callback function h
coding.forEach( (val) =>  {
    console.log(val);
    
} )