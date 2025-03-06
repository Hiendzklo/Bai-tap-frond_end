let arr = []; 

let choice;
do {
    let menu = `
    MENU:
    1. Nhập vào mảng
    2. Hiển thị mảng
    3. Thêm phần tử
    4. Sửa phần tử
    5. Xóa phần tử
    6. Thoát
    `;
    
    choice = parseInt(prompt(menu + "Lựa chọn của bạn:"));

    if (choice === 1) {
        let input = prompt("Nhập vào mảng các phần tử (các phần tử cách nhau bằng dấu phẩy):");
        arr = input.split(",").map(Number); 
    }
    else if (choice === 2) {
        alert("Mảng hiện tại: " + arr.join(", ")); 
    }
    else if (choice === 3) {
        let element = parseInt(prompt("Nhập phần tử muốn thêm vào mảng:"));
        arr.push(element); 
    }
    else if (choice === 4) {
        let index = parseInt(prompt("Nhập chỉ số phần tử cần sửa:"));
        if (index >= 0 && index < arr.length) {
            let newValue = parseInt(prompt("Nhập giá trị mới cho phần tử tại vị trí " + index + ":"));
            arr[index] = newValue; 
        } else {
            alert("Chỉ số không hợp lệ.");
        }
    }
    else if (choice === 5) {
        let index = parseInt(prompt("Nhập chỉ số phần tử cần xóa:"));
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1); 
        } else {
            alert("Chỉ số không hợp lệ.");
        }
    }
    else if (choice === 6) {
        alert("Thoát chương trình.");
    }
    else {
        alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }

} while (choice !== 6);
