let tenDangNhap = prompt("Nhập tên đăng nhập:");

if (tenDangNhap === "ADMIN") {
    let matKhau = prompt("Nhập mật khẩu:");

    if (matKhau === "TheMaster") {
        console.log("Welcome");
    } else if (matKhau === null) {
        console.log("Cancelled");
    } else {
        console.log("Wrong password");
    }
} else if (tenDangNhap === null) {
    console.log("Cancelled");
} else {
    console.log("I don't know you");
}
