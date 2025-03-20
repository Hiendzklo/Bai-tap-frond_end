const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const textContent = document.getElementById("textContent");

// Hàm thay đổi kích thước chữ
let fontSize = 20;

function changeFontSize(amount) {
  fontSize += amount;
  textContent.style.fontSize = fontSize + "px";
}

// Sự kiện khi nhấn nút "+"
increaseBtn.addEventListener("click", function () {
  changeFontSize(2); // Tăng kích thước chữ lên 2px
});

// Sự kiện khi nhấn nút "-"
decreaseBtn.addEventListener("click", function () {
  changeFontSize(-2); // Giảm kích thước chữ xuống 2px
});
