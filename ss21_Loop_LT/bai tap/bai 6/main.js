let number = parseInt(prompt("Nhập một số nguyên bất kỳ:"));

console.log("Các ước của số", number, "là:");
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i); 
    }
}
