// Lấy phần tử button và phần tử hiển thị số lần bấm
const button = document.getElementById("myButton");
const countDisplay = document.getElementById("countDisplay");

// Biến đếm số lần bấm
let count = 0;

// Thêm sự kiện click vào button
button.addEventListener("click", function () {
  count++; // Tăng biến đếm lên 1 khi bấm nút
  countDisplay.textContent = "Số lần bấm: " + count; // Cập nhật số lần bấm
});
