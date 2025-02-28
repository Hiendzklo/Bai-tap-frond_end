let a = parseFloat(prompt("Nhập độ dài cạnh a:"));
let b = parseFloat(prompt("Nhập độ dài cạnh b:"));
let c = parseFloat(prompt("Nhập độ dài cạnh c:"));

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log("Đây là tam giác đều.");
    } else if (a === b || b === c || a === c) {
        console.log("Đây là tam giác cân.");
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        console.log("Đây là tam giác vuông.");
    } else {
        console.log("Đây là tam giác thường.");
    }
} else {
    console.log("Các cạnh không tạo thành một tam giác hợp lệ.");
}
