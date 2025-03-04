let n = prompt("Nhập vào số n:");

n = parseInt(n);

if (isNaN(n) || n <= 0) {
    console.log("Không hợp lệ");
} else {
    let fibonacci = [1, 1]; 
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
    }
    console.log(fibonacci.slice(0, n).join(" ")); 
}
