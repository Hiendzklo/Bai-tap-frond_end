let a = parseFloat(prompt("Nhập số thứ nhất (a):"));
let b = parseFloat(prompt("Nhập số thứ hai (b):"));
let c = parseFloat(prompt("Nhập số thứ ba (c):"));

// Giả sử a là số lớn nhất
let max = a;

if (b > max) {
    max = b;
}

if (c > max) {
    max = c;
}

alert("Số lớn nhất trong 3 số là: " + max);
