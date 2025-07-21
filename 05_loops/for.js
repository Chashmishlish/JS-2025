

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
    console.log(element); 
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    console.log(`The Outer loop value is: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`The Inner loop value is: ${j} and inner loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j);
    } // it will print table from 1 till 10
}

//array declaration
let myArray = ["CPU", "Monitor", "Mouse", "SSD", "Keyboard", "Headphone"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

