let month = parseInt(prompt("Nhập tháng (1 đến 12):"));

if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log(`Tháng ${month} có 31 ngày`);
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(`Tháng ${month} có 30 ngày`);
} else if (month === 2) {
    let year = parseInt(prompt("Nhập năm để kiểm tra năm nhuận (VD: 2020):"));
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`Tháng 2 có 29 ngày trong năm nhuận ${year}`);
    } else {
        console.log(`Tháng 2 có 28 ngày`);
    }
} else {
    console.log("Tháng không hợp lệ");
}
