let correctPassword = "123456";

let enteredPassword = prompt("Vui lòng nhập mật khẩu:");

if (enteredPassword === correctPassword) {
    console.log("Mật khẩu đúng. Bạn đã đăng nhập thành công!");
} else {
    console.log("Mật khẩu sai. Vui lòng thử lại.");
}
