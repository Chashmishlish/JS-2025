//for in for objects
const myObject = {
    JS : 'JavaScript',
    CPP : 'C++',
    RB: "Ruby",
    Swift: "Swift By Apple"
}

for (const key in myObject) {
    console.log(`${key} short for ${myObject[key]}`);
}

//for in for array
const programming = ["js", 'rb', "py", "java", "cpp" , "html"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]); 
}

