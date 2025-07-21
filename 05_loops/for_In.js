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

const map = new Map()
map.set('PK', "Pakistan")
map.set('US', "States Of America")
map.set('FR', "France")
map.set('PK', "Pakistan")

for (const key in map) {
    console.log(key);
}  //won't run

// because Map is not iteratable 
