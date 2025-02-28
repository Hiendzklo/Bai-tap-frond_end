let namKinhNghiem = parseInt(prompt("Nhập số năm kinh nghiệm của nhân viên:"));

console.log("Sử dụng if-else:");
if (namKinhNghiem < 1) {
    console.log("Mới vào nghề");
} else if (namKinhNghiem >= 1 && namKinhNghiem <= 3) {
    console.log("Nhân viên có kinh nghiệm");
} else if (namKinhNghiem >= 4 && namKinhNghiem <= 6) {
    console.log("Chuyên viên");
} else {
    console.log("Quản lý");
}

console.log("Sử dụng switch-case:");
switch (true) {
    case (namKinhNghiem < 1):
        console.log("Mới vào nghề");
        break;
    case (namKinhNghiem >= 1 && namKinhNghiem <= 3):
        console.log("Nhân viên có kinh nghiệm");
        break;
    case (namKinhNghiem >= 4 && namKinhNghiem <= 6):
        console.log("Chuyên viên");
        break;
    default:
        console.log("Quản lý");
        break;
}
