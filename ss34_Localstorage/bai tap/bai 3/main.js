document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy giá trị từ form đăng nhập
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Kiểm tra tính hợp lệ của thông tin người dùng
    if (email === "" || password === "") {
      alert("Email và mật khẩu không được để trống!");
      return;
    }

    // Lấy thông tin đăng ký từ LocalStorage
    const registeredEmail = localStorage.getItem("email");
    const registeredPassword = localStorage.getItem("password");

    // Kiểm tra xem email và password có khớp với dữ liệu đã lưu trong LocalStorage không
    if (email === registeredEmail && password === registeredPassword) {
      alert("Đăng nhập thành công!");
      window.location.href = "#";
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  });
