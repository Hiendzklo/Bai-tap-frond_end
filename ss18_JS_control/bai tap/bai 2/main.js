let diemToan = parseFloat(prompt("Nhập điểm môn Toán:"));
let diemVan = parseFloat(prompt("Nhập điểm môn Văn:"));
let diemAnh = parseFloat(prompt("Nhập điểm môn Anh:"));

if (isNaN(diemToan) || isNaN(diemVan) || isNaN(diemAnh)) {
    console.log("Vui lòng nhập điểm hợp lệ cho các môn!");
} else {
    let diemTrungBinh = (diemToan + diemVan + diemAnh) / 3;

    console.log("Điểm trung bình: " + diemTrungBinh.toFixed(2));

    let xepLoai;
    if (diemTrungBinh >= 8.0) {
        xepLoai = "Giỏi";
    } else if (diemTrungBinh >= 6.5) {
        xepLoai = "Khá";
    } else if (diemTrungBinh >= 5.0) {
        xepLoai = "Trung bình";
    } else {
        xepLoai = "Yếu";
    }

    console.log("Xếp loại học lực: " + xepLoai);
}
