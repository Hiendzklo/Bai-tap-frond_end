let input = prompt("Nhập vào một số nguyên:");

let n = parseInt(input);

if (isNaN(n) || n <= 0) {
    console.log("dữ liệu nhập vào không hợp lệ");
} else {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    console.log("Tổng các số từ 1 đến " + n + " là: " + sum);
}
