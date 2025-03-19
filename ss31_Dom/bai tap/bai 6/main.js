const correctUsername = "huanrose@gmail.com";
const correctPassword = "123456";

// Lấy form và các trường nhập liệu
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Xử lý khi người dùng gửi form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngừng việc gửi form

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Kiểm tra tài khoản và mật khẩu
  if (username === correctUsername && password === correctPassword) {
    console.log("Đăng nhập thành công!");
  } else {
    console.log("Đăng nhập thất bại!");
  }
});
