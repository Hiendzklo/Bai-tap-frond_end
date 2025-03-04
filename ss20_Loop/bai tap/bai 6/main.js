let number = prompt("Nhập vào một số nguyên:");

number = parseInt(number);

if (isNaN(number) || number <= 1) {
    console.log("Không phải là số nguyên tố");
} else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Là số nguyên tố");
    } else {
        console.log("Không phải là số nguyên tố");
    }
}
