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

// slice , splice





