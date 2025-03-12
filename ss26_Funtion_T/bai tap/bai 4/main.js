function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true;
}

function filterPrimeNumbers(input) {
    if (Array.isArray(input) && input.every(item => typeof item === 'number')) {
        let result = input.filter(num => isPrime(num));
        
        console.log(result);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}

filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  
filterPrimeNumbers([]);                              
filterPrimeNumbers(["abc"]);                        
