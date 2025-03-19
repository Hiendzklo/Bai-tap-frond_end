// Lấy các phần tử cần thiết
const textContent = document.getElementById("text-content");
const hideButton = document.getElementById("hide-btn");
const showButton = document.getElementById("show-btn");

// Ẩn văn bản khi nhấn nút "Hide text"
hideButton.addEventListener("click", function () {
  textContent.style.display = "none";
});

// Hiển thị lại văn bản khi nhấn nút "Show text"
showButton.addEventListener("click", function () {
  textContent.style.display = "block";
});
