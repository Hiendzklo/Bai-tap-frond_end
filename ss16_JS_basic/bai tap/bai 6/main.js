let usd = prompt("Nhập số tiền (USD):");

usd = parseFloat(usd);

const exchangeRate = 25000;

let vnd = usd * exchangeRate;

alert(usd + " USD = " + vnd.toLocaleString() + " VND");
