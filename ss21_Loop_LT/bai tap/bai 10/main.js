let n = parseInt(prompt("Nhập một số nguyên n:"));
let count = 0;  
let num = 2;  

while (count < n) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
        count++;
    }

    num++;
}
