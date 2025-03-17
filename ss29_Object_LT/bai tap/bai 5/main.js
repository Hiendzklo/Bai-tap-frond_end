let users = [];

// Hàm kiểm tra email hợp lệ
function isValidEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/.test(email);
}

// Hàm kiểm tra mật khẩu hợp lệ
function isValidPassword(password) {
  return /^(?=.*[A-Z])(?=.*\W).{6,}$/.test(password);
}

// Hàm đăng ký người dùng
function registerUser(name, email, password) {
  if (!isValidEmail(email)) {
    console.log(
      "Email không hợp lệ! Email phải chứa '@' và kết thúc bằng '.com' hoặc '.vn'."
    );
    return;
  }
  if (!isValidPassword(password)) {
    console.log(
      "Mật khẩu phải có ít nhất 6 ký tự, bao gồm ký tự viết hoa và ký tự đặc biệt."
    );
    return;
  }
  if (users.some((user) => user.email === email)) {
    console.log("Email đã tồn tại! Vui lòng đăng ký bằng email khác.");
    return;
  }

  users.push({ name, email, password });
  console.log(`Đăng ký thành công! Chào mừng ${name}.`);
}

// Hàm đăng nhập người dùng
function loginUser(email, password) {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    console.log(`Đăng nhập thành công! Chào mừng ${user.name}.`);
  } else {
    console.log("Đăng nhập thất bại! Email hoặc mật khẩu không đúng.");
  }
}

// Menu chính
function showMenu() {
  let option;
  do {
    option = prompt(
      "Chọn chức năng:\n" +
        "1. Đăng ký người dùng mới.\n" +
        "2. Đăng nhập người dùng.\n" +
        "3. Thoát."
    );

    switch (option) {
      case "1":
        const name = prompt("Nhập tên:");
        const email = prompt("Nhập email:");
        const password = prompt("Nhập mật khẩu:");
        registerUser(name, email, password);
        break;
      case "2":
        const loginEmail = prompt("Nhập email:");
        const loginPassword = prompt("Nhập mật khẩu:");
        loginUser(loginEmail, loginPassword);
        break;
      case "3":
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ.");
    }
  } while (option !== "3");
}

showMenu();
