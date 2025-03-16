let students = [
  { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
  { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
  { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9.5, literature: 9 } },
];

function calculateAverageScore(scores) {
  const total = scores.math + scores.english + scores.literature;
  return total / 3;
}

let filteredStudents = students.filter((student) => {
  const averageScore = calculateAverageScore(student.scores);
  return averageScore >= 8;
});

console.log("Danh sách sinh viên có điểm trung bình >= 8:");
filteredStudents.forEach((student) => {
  console.log(student.name);
});
