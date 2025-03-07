let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
let arr = [];

for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    arr.push(num); 
}

let isFibonacci = true;

for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + arr[i - 2]) {
        isFibonacci = false;
        break; 
    }
}

if (isFibonacci) {
    console.log("Mảng là dãy số Fibonacci.");
} else {
    console.log("Mảng không phải là dãy số Fibonacci.");
}           
