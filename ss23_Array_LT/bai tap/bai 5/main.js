let n = parseInt(prompt("Nhập số phần tử của mảng:"));
let arr = []; 

for (let i = 0; i < n; i++) {
    let element = prompt("Nhập phần tử thứ " + (i + 1) + ":");
    arr.push(element); 
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== '') {
        sum += parseInt(arr[i]); 
    }
}

console.log("Tổng các ký tự là số trong mảng là: " + sum);
