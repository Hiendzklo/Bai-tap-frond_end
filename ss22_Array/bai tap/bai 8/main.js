let input = prompt("Nhập vào mảng các phần tử (các phần tử cách nhau bằng dấu phẩy):");
let numbers = input.split(",").map(Number); 

let counts = {}; 

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    counts[num] = (counts[num] || 0) + 1; 
}

let maxCount = 0;
let mostFrequent = numbers[0];

for (let num in counts) {
    if (counts[num] > maxCount || (counts[num] === maxCount && num < mostFrequent)) {
        maxCount = counts[num];
        mostFrequent = num;
    }
}

alert("Phần tử xuất hiện nhiều nhất là: " + mostFrequent);
