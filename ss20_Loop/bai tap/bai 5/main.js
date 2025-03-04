// Nhập vào giá trị a và b
let a = prompt("Nhập vào giá trị a:");
let b = prompt("Nhập vào giá trị b:");

a = parseFloat(a);
b = parseInt(b);

if (isNaN(a) || isNaN(b)) {
    console.log("Không hợp lệ");
} else {
    let result = 1;

    for (let i = 1; i <= b; i++) {
        result *= a;
    }

    console.log("Kết quả là: " + result);
}
