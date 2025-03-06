let input = prompt("Nhập vào mảng các phần tử (các phần tử cách nhau bằng dấu phẩy):");
let numbers = input.split(",").map(Number); 

let uniqueNumbers = [...new Set(numbers)].sort((a, b) => a - b);

alert("Mảng sau khi loại bỏ phần tử trùng: " + uniqueNumbers.join(", "));
