const myArray = [0, 1, 2, 3, 4 ,5]

const myTeachers = ["Miss Afsheen", "Miss Tarannum", "Miss Noor", "Sir Rashid", "Sir Adnan"]
const subjects = ["Science", "English", "Urdu", "Grammar", "Maths"];
// const institute = subjects.concat(myTeachers); //one way of concatination
// const institute = [...subjects, ...myTeachers]; //another way of concatination
// console.log(institute);

const institute = [
  { Subject: "Science", Teacher: "Miss Afsheen" },
  { Subject: "English", Teacher: "Miss Tarannum" },
  { Subject: "Urdu", Teacher: "Miss Noor" },
  { Subject: "Grammar", Teacher: "Sir Rashid" },
  { Subject: "Maths", Teacher: "Sir Adnan" },
]; //an array of objects:
console.table(institute); 

// Array Methods
const bodyParts = ["foot", "hands", "eyes", "mouth"]
bodyParts.push("nose")
bodyParts.push("head") //
bodyParts.pop() //removed last element
bodyParts.unshift("nails") //added at start
bodyParts.shift( ) //remove 1st element
console.log(bodyParts.includes("eyes")); //to check if something is included in array or not
console.log(bodyParts.indexOf(3)); //-1
console.log(bodyParts.indexOf("nose")); //4

const newArray = bodyParts.join()
console.log(newArray);  // ...,..,..
console.log(bodyParts); // [..,...,..]

console.log("A", newArray);  //A foot,hands,eyes,mouth,nose
console.log("A", bodyParts); //A [ 'foot', 'hands', 'eyes', 'mouth', 'nose' ]

//slice with .join
const myn1 = newArray.slice(0, 4)
const myn2 = newArray.slice(0, 16)

console.log(myn1); //foot
console.log(myn2); //foot,hands,eyes,
console.log("My", myn1, "aches"); // My foot aches

//slice without .join
const stationary = ["pen", "pencil", "notebook", "markers"];
const slicedArray = stationary.slice(1, 3);

console.log(slicedArray); //[ 'pencil', 'notebook' ]

