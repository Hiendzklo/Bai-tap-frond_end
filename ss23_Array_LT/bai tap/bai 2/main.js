let input = prompt("Nhập các số nguyên cách nhau bằng dấu phẩy:");
let arr = input.split(',').map(Number); 

if (arr.length === 0) {
    console.log("Mảng không có phần tử nào.");
} else {
    let max = arr[0]; 
    let index = 0; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
            index = i; 
        }
    }

    console.log("Số lớn nhất trong mảng là: " + max);
    console.log("Vị trí của số lớn nhất trong mảng là: " + (index + 1)); 
}
