let array = [];
let exit = false;

while (!exit) {
    let choice = prompt(
        "Menu:\n" +
        "1. Nhập mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n" +
        "4. Tính tổng các phần tử trong mảng\n" +
        "5. Tìm số lần xuất hiện của mỗi phần tử trong mảng\n" +
        "6. Sắp xếp mảng tăng dần\n" +
        "7. Thoát chương trình\n" +
        "Chọn một tùy chọn (1-7):"
    );

    switch (choice) {
        case "1":
            let input = prompt("Nhập các phần tử mảng, cách nhau bởi dấu phẩy (ví dụ: 1,2,3,4):");
            array = input.split(",").map(Number);
            break;
        
        case "2":
            console.log("Mảng hiện tại: " + array);
            break;
        
        case "3":
            if (array.length > 0) {
                let max = Math.max(...array);
                let min = Math.min(...array);
                console.log("Phần tử lớn nhất: " + max);
                console.log("Phần tử nhỏ nhất: " + min);
            } else {
                console.log("Mảng rỗng.");
            }
            break;
        
        case "4":
            let sum = array.reduce((acc, num) => acc + num, 0);
            console.log("Tổng các phần tử trong mảng: " + sum);
            break;
        
        case "5":
            let elementToCount = prompt("Nhập phần tử cần kiểm tra số lần xuất hiện:");
            elementToCount = Number(elementToCount); 
            let count = 0;
            
            for (let i = 0; i < array.length; i++) {
                if (array[i] === elementToCount) {
                    count++;
                }
            }
            
            console.log("Số lần xuất hiện của phần tử " + elementToCount + " trong mảng là: " + count);
            break;
        
        case "6":
            array.sort((a, b) => a - b);
            console.log("Mảng sau khi sắp xếp tăng dần: " + array);
            break;
        
        case "7":
            exit = true;
            console.log("Chương trình kết thúc.");
            break;
        
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
            break;
    }
}
