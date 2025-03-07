let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
let arr = [];

for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    arr.push(num); 
}

let max = Math.max(...arr); 
arr.splice(arr.indexOf(max), 1); 
let secondMax = Math.max(...arr); 

console.log("Số lớn thứ hai trong mảng là: " + secondMax);
