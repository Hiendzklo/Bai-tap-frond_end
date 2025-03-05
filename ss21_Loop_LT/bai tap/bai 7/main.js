let initialAmount = parseFloat(prompt("Nhập số tiền ban đầu:"));
let interestRate = parseFloat(prompt("Nhập lãi suất tháng (%):")) / 100;  
let months = parseInt(prompt("Nhập số tháng gửi:"));

let totalAmount = initialAmount;
for (let i = 0; i < months; i++) {
    totalAmount += totalAmount * interestRate; 
}

let interestEarned = totalAmount - initialAmount;

console.log("Tiền lãi: " + interestEarned.toFixed(3));
console.log("Tiền nhận được: " + totalAmount.toFixed(3));
