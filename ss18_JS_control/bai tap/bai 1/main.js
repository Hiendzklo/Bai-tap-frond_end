let soNguyen = prompt("Nhập một số nguyên:");

soNguyen = parseInt(soNguyen);

if (isNaN(soNguyen)) {
    console.log("Vui lòng nhập một số nguyên hợp lệ!");
} else {
    if (soNguyen % 2 === 0) {
        console.log("Số " + soNguyen + " là số chẵn.");
    } else {
        console.log("Số " + soNguyen + " là số lẻ.");
    }
}
