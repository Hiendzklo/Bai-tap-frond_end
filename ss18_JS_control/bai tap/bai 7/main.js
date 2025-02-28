let a = parseFloat(prompt("Mời bạn nhập vào số a:"));
let b = parseFloat(prompt("Mời bạn nhập vào số b:"));

let phepToan = prompt("Mời bạn nhập vào các phép toán (+, -, *, /):");

let ketQua;

switch (phepToan) {
    case "+":
        ketQua = a + b;
        break;
    case "-":
        ketQua = a - b;
        break;
    case "*":
        ketQua = a * b;
        break;
    case "/":
        if (b !== 0) {
            ketQua = a / b;
        } else {
            alert("Không thể chia cho 0!");
            ketQua = null;
        }
        break;
    default:
        alert("Phép toán không hợp lệ!");
        ketQua = null;
}

if (ketQua !== null) {
    alert("Kết quả của phép tính trên: " + a + " " + phepToan + " " + b + " = " + ketQua);
}
