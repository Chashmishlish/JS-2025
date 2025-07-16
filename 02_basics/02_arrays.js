const panchayat_characters = ["Sachiv Jee", "Paradhan Jee", "Manju Devi", "Prahlad Chaa", "Vikas", "Rinki" ]
const Tmkoc_characters = ["Daya", "Jethalal", "Metha sahab", "Anjali"]

panchayat_characters.push(Tmkoc_characters)

console.log(panchayat_characters)
console.log(panchayat_characters[5][3]); //rinki - k
console.log(panchayat_characters[0]);    //Sachiv jee
console.log(panchayat_characters[panchayat_characters.length - 2]); // Rinki
console.log(panchayat_characters[panchayat_characters.length - 5]); // Manju Devi


panchayat_characters.concat(Tmkoc_characters)
console.log(panchayat_characters) // sirf panchayat wali array ayegi

const all_characters = panchayat_characters.concat(Tmkoc_characters);
console.log(all_characters); //all character as an output

//spread operator
const Country = ["Pakistan", "US", "Uk" , "Germany", "Canada"]
const Capital = ["Islamabad", "Washington DC", "Berlin", "Ottawa"]
let all = [...Country, ...Capital];
console.log(all);

//Array k ander array, array k ander ek or array => Nested array
const num_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const updated_num_array1 = num_array.flat(Infinity)
const updated_num_array2 = num_array.flat(1)
const updated_num_array3 = num_array.flat(2)

console.log(updated_num_array1);
console.log(updated_num_array2);
console.log(updated_num_array3);


// isArray, .from 
console.log(Array.isArray("Chashmish"));   // false
console.log(Array.from("Alish")); // ['A', 'l', 'i', 's', 'h']
console.log(Array.from({name: "Alishba"})); // []


//Array.of
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
