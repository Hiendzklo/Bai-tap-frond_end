let number = prompt("Nhập một số:");

let isPerfectSquare = (Math.sqrt(number) % 1 === 0) ? `${number} là số chính phương` : `${number} không phải số chính phương`;

console.log(isPerfectSquare);
