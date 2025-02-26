let inputString = prompt("Nhập một từ không có dấu cách:");

if (inputString.length > 0) {
    let chars = inputString.split("");

    for (let i = 0; i < chars.length; i++) {
        if (i === 0) {
            chars[i] = chars[i].toUpperCase();
        } else {
            chars[i] = chars[i].toLowerCase();
        }
    }

    let result = chars.join("");

    alert("Chuỗi sau khi viết hoa chữ cái đầu: " + result);
} else {
    alert("Chuỗi không hợp lệ!");
}
