let inputString = prompt("Nhập một chuỗi bất kỳ:");

let count = 0;
let inWord = false;

for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== " ") {
        if (!inWord) {
            count++;
            inWord = true;
        }
    } else {
        inWord = false;
    }
}

alert("Số từ trong chuỗi: " + count);
