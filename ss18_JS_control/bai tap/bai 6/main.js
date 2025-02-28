let nam = parseInt(prompt("Nhập một năm để kiểm tra:"));

if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0)) {
    console.log(nam + " là năm nhuận (if-else)");
} else {
    console.log(nam + " không phải là năm nhuận (if-else)");
}

switch (true) {
    case (nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0):
        console.log(nam + " là năm nhuận (switch-case)");
        break;
    default:
        console.log(nam + " không phải là năm nhuận (switch-case)");
        break;
}
