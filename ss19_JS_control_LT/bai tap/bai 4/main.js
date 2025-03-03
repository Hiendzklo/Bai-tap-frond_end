let number = parseInt(prompt("Nhập số để kiểm tra:"));

if (number % 3 === 0 && number % 5 === 0) {
    console.log(number + " chia hết cho cả 3 và 5");
} else {
    console.log(number + " không chia hết cho cả 3 và 5");
}
