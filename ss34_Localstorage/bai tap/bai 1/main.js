document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy giá trị từ form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Kiểm tra các điều kiện
    if (email === "" || password === "" || confirmPassword === "") {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    // Lưu thông tin vào LocalStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Tạo tài khoản thành công!");
  });
