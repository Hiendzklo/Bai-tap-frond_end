let number = prompt("Nhập một số:");

number = parseInt(number);

let formattedNumber = number.toLocaleString('vi-VN');
console.log(formattedNumber + " VND");
