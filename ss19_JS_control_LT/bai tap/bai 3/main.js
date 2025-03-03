const exchangeRate = 23000;

let type = prompt("Nhập loại tiền (VND hoặc USD):").toUpperCase();
let amount = parseFloat(prompt("Nhập số tiền cần chuyển đổi:"));

if (type === "VND") {
    let usd = amount / exchangeRate;
    console.log(`${amount} VND --> ${usd} USD`);
} else if (type === "USD") {
    let vnd = amount * exchangeRate;
    console.log(`${amount} USD --> ${vnd} VND`);
} else {
    console.log("Loại tiền không hợp lệ. Vui lòng nhập 'VND' hoặc 'USD'.");
}
