let math = parseFloat(prompt("Nhập điểm môn Toán:"));
let physics = parseFloat(prompt("Nhập điểm môn Vật lý:"));
let chemistry = parseFloat(prompt("Nhập điểm môn Hóa học:"));

let average = (math + physics + chemistry) / 3;

alert("Điểm trung bình của bạn là: " + average.toFixed(2));
