const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  // console.log(students.map((x) => x.score).reduce((acc, cur) => acc + cur) / 4);
  return students.map((x) => x.score).reduce((acc, cur) => acc + cur) / 4;
}

getAverageStudentScore(students); // Output: 87.5
