// Lấy phần tử input, button và emailStatus
const emailInput = document.getElementById("emailInput");
const checkBtn = document.getElementById("checkBtn");
const emailStatus = document.getElementById("emailStatus");

// Hàm kiểm tra tính hợp lệ của email
function checkEmailValidity() {
  const email = emailInput.value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;

  if (regex.test(email)) {
    emailStatus.textContent = "email hợp lệ!";
    emailStatus.classList.remove("invalid");
    emailStatus.classList.add("valid");
  } else {
    emailStatus.textContent = "email không hợp lệ!";
    emailStatus.classList.remove("valid");
    emailStatus.classList.add("invalid");
  }
}

// Thêm sự kiện click vào nút check
checkBtn.addEventListener("click", checkEmailValidity);
