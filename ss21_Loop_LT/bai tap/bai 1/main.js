let numbers = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
    let number = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
    numbers.push(number);
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) { 
        sum += numbers[i];
    }
}

console.log("Tổng các số lẻ là:", sum);
