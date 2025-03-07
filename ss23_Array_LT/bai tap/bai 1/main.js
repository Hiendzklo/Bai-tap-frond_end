let input = prompt("Nhập các số nguyên cách nhau bằng dấu phẩy:");
let arr = input.split(',').map(Number); 

let result = []; 

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        result.push(arr[i]); 
    }
}

if (result.length > 0) {
    console.log("Các số lớn hơn hoặc bằng 10: " + result.join(', '));
} else {
    console.log("Không có số nào lớn hơn 10");
}
