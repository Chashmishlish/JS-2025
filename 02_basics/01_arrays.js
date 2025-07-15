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





