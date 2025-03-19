// Lấy phần tử body và nút toggle
const body = document.body;
const toggleButton = document.getElementById("toggle-btn");

// Thêm sự kiện click vào nút
toggleButton.addEventListener("click", function () {
  // Kiểm tra xem body có đang có class 'dark-mode' không
  if (body.style.backgroundColor === "black") {
    // Nếu có, chuyển về chế độ sáng
    body.style.backgroundColor = "white";
    body.style.color = "black";
    toggleButton.textContent = "Toggle dark mode"; // Thay đổi text nút
  } else {
    // Nếu không, chuyển về chế độ tối
    body.style.backgroundColor = "black";
    body.style.color = "white";
    toggleButton.textContent = "Toggle light mode"; // Thay đổi text nút
  }
});
