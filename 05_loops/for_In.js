const myObject = {
    JS : 'JavaScript',
    CPP : 'C++',
    RB: "Ruby",
    Swift: "Swift By Apple"
}

for (const key in myObject) {
    console.log(`${key} short for ${myObject[key]}`);
}

