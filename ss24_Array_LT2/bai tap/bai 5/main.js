let array = [];
let exit = false;

while (!exit) {
    let choice = prompt(
        "Menu:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tính tổng đường chéo chính\n" +
        "5. Tính tổng đường chéo phụ\n" +
        "6. Tính trung bình cộng các phần tử trong một hàng hoặc cột\n" +
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
            let diagonalSum = 0;
            for (let i = 0; i < array.length; i++) {
                diagonalSum += array[i][i];
            }
            console.log("Tổng đường chéo chính là: " + diagonalSum);
            break;
        
        case "5":
            let secondaryDiagonalSum = 0;
            for (let i = 0; i < array.length; i++) {
                secondaryDiagonalSum += array[i][array.length - 1 - i];
            }
            console.log("Tổng đường chéo phụ là: " + secondaryDiagonalSum);
            break;
        
        case "6":
            let rowOrColumn = prompt("Chọn tính trung bình cộng cho hàng (h) hay cột (c)?");
            if (rowOrColumn === "h") {
                let rowIndex = prompt("Nhập chỉ số hàng cần tính trung bình (0-based index):");
                rowIndex = parseInt(rowIndex);
                if (rowIndex >= 0 && rowIndex < array.length) {
                    let sumRow = array[rowIndex].reduce((acc, num) => acc + num, 0);
                    let average = sumRow / array[rowIndex].length;
                    console.log("Trung bình cộng của hàng " + (rowIndex + 1) + " là: " + average);
                } else {
                    console.log("Chỉ số hàng không hợp lệ.");
                }
            } else if (rowOrColumn === "c") {
                let colIndex = prompt("Nhập chỉ số cột cần tính trung bình (0-based index):");
                colIndex = parseInt(colIndex);
                if (colIndex >= 0 && colIndex < array[0].length) {
                    let sumCol = 0;
                    for (let i = 0; i < array.length; i++) {
                        sumCol += array[i][colIndex];
                    }
                    let average = sumCol / array.length;
                    console.log("Trung bình cộng của cột " + (colIndex + 1) + " là: " + average);
                } else {
                    console.log("Chỉ số cột không hợp lệ.");
                }
            } else {
                console.log("Lựa chọn không hợp lệ.");
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
