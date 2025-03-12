let str = ''; 
let choice; 

while (true) {
    choice = prompt(`
    1. Nhập chuỗi
    2. Hiển thị chuỗi
    3. Tính độ dài chuỗi
    4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
    5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
    6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
    7. Thoát chương trình
    `);

    switch (choice) {
        case '1':
            str = prompt("Nhập chuỗi:");
            break;
        case '2':
            console.log("Chuỗi bạn đã nhập: " + str);
            break;
        case '3':
            console.log("Độ dài chuỗi: " + str.length);
            break;
        case '4':
            let charToCount = prompt("Nhập ký tự cần đếm:");
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] === charToCount) {
                    count++;
                }
            }
            console.log("Số lần xuất hiện của ký tự '" + charToCount + "': " + count);
            break;
        case '5':
            let reversedStr = str.split("").reverse().join("");
            if (str === reversedStr) {
                console.log("Chuỗi là chuỗi đối xứng.");
            } else {
                console.log("Chuỗi không phải là chuỗi đối xứng.");
            }
            break;
        case '6':
            let words = str.split(" ");
            let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
            let result = capitalizedWords.join(" ");
            console.log("Chuỗi sau khi chuyển đổi: " + result);
            break;
        case '7':
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
    }

    if (choice === '7') {
        break;
    }
}
