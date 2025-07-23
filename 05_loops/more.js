const coding = ["JS" , "PY" , "CPP" , "HTML" , "CSS"]

const values = coding.forEach( (item) => {
    console.log(item);
})

console.log(values)  //undefined return kuch bhi nahi hua
// manaually return krwana parega

const code = ["JS" , "PY" , "CPP" , "HTML" , "CSS"]

const value = code.forEach( (item) => {
    console.log(item);
    return item
})

console.log(value)   //undefined
// again we saw the value undefined even after using the return
// agar hum     console.log(item); comment krden tb bhi undefined he ayega

console.log("It means FOR EACH () doesn't return any value ");








