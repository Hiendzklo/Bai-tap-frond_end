let str = ''; 
let choice; 

while (true) {
    choice = prompt(`
    1. Nhập chuỗi
    2. Hiển thị chuỗi
    3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
    4. Đảo ngược chuỗi ký tự
    5. Đếm số lượng từ trong chuỗi ký tự
    6. Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. Ví dụ người dùng nhập "e", chuỗi gốc "Hello" → Tìm thấy ký tự, cho người dùng nhập vào ký tự thay thế "o" → Thay thế
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
            str = str.trim();
            console.log("Chuỗi sau khi loại bỏ khoảng trắng ở đầu và cuối: " + str);
            break;
        case '4':
            let reversedStr = str.split("").reverse().join("");
            console.log("Chuỗi sau khi đảo ngược: " + reversedStr);
            break;
        case '5':
            let wordCount = str.split(/\s+/).length;
            console.log("Số lượng từ trong chuỗi: " + wordCount);
            break;
        case '6':
            let charToFind = prompt("Nhập ký tự bạn muốn tìm:");
            let charToReplace = prompt("Nhập ký tự bạn muốn thay thế:");
            if (str.includes(charToFind)) {
                let updatedStr = str.split(charToFind).join(charToReplace);
                console.log("Chuỗi sau khi thay thế: " + updatedStr);
            } else {
                console.log("Ký tự không được tìm thấy trong chuỗi.");
            }
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
