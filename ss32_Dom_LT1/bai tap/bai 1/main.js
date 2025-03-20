// Hàm tạo màu ngẫu nhiên
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Lấy phần tử button và div
const colorBox = document.getElementById("colorBox");
const changeColorBtn = document.getElementById("changeColorBtn");

// Khi người dùng nhấn nút, thay đổi màu nền của div
changeColorBtn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
});
