let month = parseInt(prompt("Nhập tháng (1 đến 12):"));

if (month >= 1 && month <= 3) {
    console.log("Mùa xuân");
} else if (month >= 4 && month <= 6) {
    console.log("Mùa hạ");
} else if (month >= 7 && month <= 9) {
    console.log("Mùa thu");
} else if (month >= 10 && month <= 12) {
    console.log("Mùa đông");
} else {
    console.log("Tháng không hợp lệ");
}
