let input = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu phẩy:");
let arr = input.split(','); 

for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i]) && arr[i] !== '') {
        console.log(arr[i]);
    }
}
