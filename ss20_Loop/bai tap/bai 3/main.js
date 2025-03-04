let input = prompt("Nhập vào một số:");

let number = input.trim();
if (isNaN(number) || number === "") {
    console.log("Số không hợp lệ");
} else {
    let reversedNumber = number.split('').reverse().join('');
    if (number === reversedNumber) {
        console.log("Là số đối xứng");
    } else {
        console.log("Không phải số đối xứng");
    }
}
