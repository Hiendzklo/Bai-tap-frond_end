let character = prompt("Nhập ký tự để kiểm tra:");

if (character.length === 1 && character.match(/[a-zA-Z]/)) {
    console.log(`ký tự ${character} là chữ cái`);
} else {
    console.log(`ký tự ${character} không phải chữ cái`);
}
