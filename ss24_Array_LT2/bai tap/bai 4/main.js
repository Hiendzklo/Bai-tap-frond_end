let array = [];
let exit = false;

while (!exit) {
    let choice = prompt(
        "Menu:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát chương trình\n" +
        "Chọn một tùy chọn (1-7):"
    );

    switch (choice) {
        case "1":
            let rows = prompt("Nhập số lượng hàng trong mảng 2 chiều:");
            rows = parseInt(rows);
            let columns = prompt("Nhập số lượng cột trong mảng 2 chiều:");
            columns = parseInt(columns);
            array = [];
            
            for (let i = 0; i < rows; i++) {
                let rowInput = prompt(`Nhập các phần tử của hàng ${i + 1}, cách nhau bởi dấu phẩy (ví dụ: 1,2,3):`);
                array[i] = rowInput.split(",").map(Number);
            }
            console.log("Mảng 2 chiều đã được nhập:");
            console.table(array);
            break;
        
        case "2":
            console.log("Mảng 2 chiều hiện tại:");
            console.table(array);
            break;
        
        case "3":
            let totalSum = 0;
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    totalSum += array[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng là: " + totalSum);
            break;
        
        case "4":
            let max = -Infinity;
            let maxIndex = [-1, -1];
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    if (array[i][j] > max) {
                        max = array[i][j];
                        maxIndex = [i, j];
                    }
                }
            }
            console.log("Phần tử lớn nhất trong mảng là: " + max + " và chỉ số của nó là: [" + maxIndex[0] + ", " + maxIndex[1] + "]");
            break;
        
        case "5":
            let rowIndex = prompt("Nhập chỉ số hàng cần tính trung bình (0-based index):");
            rowIndex = parseInt(rowIndex);
            if (rowIndex >= 0 && rowIndex < array.length) {
                let sumRow = array[rowIndex].reduce((acc, num) => acc + num, 0);
                let average = sumRow / array[rowIndex].length;
                console.log("Trung bình cộng các phần tử của hàng " + (rowIndex + 1) + " là: " + average);
            } else {
                console.log("Chỉ số hàng không hợp lệ.");
            }
            break;
        
        case "6":
            array.reverse();
            console.log("Mảng sau khi đảo ngược các hàng:");
            console.table(array);
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
