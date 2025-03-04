let input = prompt("Nhập vào một số nguyên:");

let n = parseInt(input);

if (isNaN(n) || n <= 0) {
    console.log("dữ liệu nhập vào không hợp lệ");
} else {
    let result = "Các số chia hết cho 5 từ 1 đến " + n + " là: ";
    let found = false;

    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0) {
            result += i + " ";
            found = true;
        }
    }

    if (!found) {
        result = "Không có số chia hết cho 5 trong khoảng từ 1 đến " + n;
    }

    console.log(result);
}
