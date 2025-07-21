

/* for (let index = 0; index < array.length; index++) {
    const element = array[index];  
}
    This loop is used to iterate over all elements of an array. 
   index is the name of variable, 
   then we have condition with the property length
   index ++ horaha hai. 
   jese he condition check hojate hai or agar true hai wese he loop k ander ajate hain 
   const element = array [index]
   isko aese chalaya tow error ajaye ga k array is not defined

   🔁 for (let index = 0; index < array.length; index++)
This is the loop structure:
let index = 0: Start with index 0 (first element of the array).
index < array.length: Keep looping as long as index is less than the total number of elements in the array.
index++: After each loop, increase the index by 1 (go to the next element).
    📦 const element = array[index];
This line gets the element at the current index from the array and saves it in the variable element.
You can now use element inside the loop body to do something with each item.

ctrl d
*/

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 6) {
        console.log(" 6 is the best number ") //phele ye print hoga 
    }
    // console.log(element); 
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`The Outer loop value is: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`The Inner loop value is: ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j);
    } // it will print table from 1 till 10
}

//array declaration
let myArray = ["CPU", "Monitor", "Mouse", "SSD", "Keyboard", "Headphone"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

/*
 JavaScript mein “out of bounds exception” (jo Java, C++ jaise languages mein hoti hain) nahi hoti. It means:
Agar aap kisi array ke index ko access karte ho jo exist nahi karta, to JavaScript error nahi throw karega.
Instead, wo simply undefined return karega.

In JavaScript 
Array ke size se bahar ka index access karna error nahi hai.
Array ke size se bahar ka index assign karne se array ka size auto increase ho jata hai.
for (let index = 0; index <= myArray.length; index++) { 
is operator <= ka use kredenge tw output me undefined ajayega

Understanding the Changing Of condition:
agar index ++ nahi kea just index he likha chordea tow continuous loop me phas jayega
Or usko ctrl + C krke rokna padega

*/


/*
How do we terminate or skip iterations in a loop
   to terminate loop in middle
   break and continue
   break: loop ko foran rok deta hai aur bahar nikal jata hai.
   continue: sirf current iteration skip karta hai, loop chalta rehta hai.
----------------------------------
   break → Terminate the loop completely
Stops the loop immediately, even if there are iterations left.
Control jumps out of the loop
   continue → Skip current iteration
Skips the rest of the current iteration and jumps to the next one.
Loop continues normally after that.
*/

for (let index = 1; index <= 20; index++) {
    if (index == 6) {
        console.log(`Detected 6`);
        break  //loop will break and won't cont... after 6
    }
    console.log(`value of i is: ${index}`);
}

