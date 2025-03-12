let array = [];
let exit = false;

while (!exit) {
    let choice = prompt(
        "Menu:\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có đối xứng không\n" +
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
            if (array.length > 0) {
                let max = Math.max(...array);
                let index = array.indexOf(max);
                console.log("Phần tử lớn nhất trong mảng là: " + max + " và chỉ số của nó là: " + index);
            } else {
                console.log("Mảng rỗng.");
            }
            break;
        case "4":
            let sum = 0;
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] > 0) {
                    sum += array[i];
                    count++;
                }
            }
            if (count > 0) {
                let average = sum / count;
                console.log("Tổng các số dương trong mảng là: " + sum);
                console.log("Trung bình cộng các số dương trong mảng là: " + average);
            } else {
                console.log("Không có số dương trong mảng.");
            }
            break;
        case "5":
            array.reverse();
            console.log("Mảng sau khi đảo ngược: " + array);
            break;
        case "6":
            let isSymmetric = true;
            for (let i = 0; i < array.length / 2; i++) {
                if (array[i] !== array[array.length - 1 - i]) {
                    isSymmetric = false;
                    break;
                }
            }
            if (isSymmetric) {
                console.log("Mảng đối xứng.");
            } else {
                console.log("Mảng không đối xứng.");
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
