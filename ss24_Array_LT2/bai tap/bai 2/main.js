let array = [];
let exit = false;

while (!exit) {
    let choice = prompt(
        "Menu:\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn và lẻ trong mảng\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn nhất trong hai phần tử chỉ định\n" +
        "7. Thoát chương trình\n" +
        "Chọn một tùy chọn (1-7):"
    );

    switch (choice) {
        case "1":
            let input = prompt("Nhập các phần tử mảng, cách nhau bởi dấu phẩy (ví dụ: 1,2,3,4):");
            array = input.split(",").map(Number);
            console.log("Mảng đã được nhập: " + array);
            break;
        case "2":
            console.log("Mảng hiện tại: " + array);
            break;
        case "3":
            let even = [];
            let odd = [];
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    even.push(array[i]);
                } else {
                    odd.push(array[i]);
                }
            }
            console.log("Các phần tử chẵn: " + even);
            console.log("Các phần tử lẻ: " + odd);
            break;
        case "4":
            if (array.length > 0) {
                let sum = array.reduce((acc, num) => acc + num, 0);
                let average = sum / array.length;
                console.log("Trung bình cộng của mảng: " + average);
            } else {
                console.log("Mảng rỗng.");
            }
            break;
        case "5":
            let indexToDelete = prompt("Nhập chỉ số phần tử cần xóa:");
            indexToDelete = parseInt(indexToDelete);
            if (indexToDelete >= 0 && indexToDelete < array.length) {
                array.splice(indexToDelete, 1);
                console.log("Mảng sau khi xóa phần tử: " + array);
            } else {
                console.log("Chỉ số không hợp lệ.");
            }
            break;
        case "6":
            let index1 = prompt("Nhập chỉ số phần tử thứ nhất:");
            let index2 = prompt("Nhập chỉ số phần tử thứ hai:");
            index1 = parseInt(index1);
            index2 = parseInt(index2);
            if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
                let largest = Math.max(array[index1], array[index2]);
                console.log("Phần tử lớn nhất giữa hai phần tử là: " + largest);
            } else {
                console.log("Chỉ số không hợp lệ.");
            }
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
