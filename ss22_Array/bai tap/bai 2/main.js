let numbers = [2, 5, 7, 4, 1, 8, 6];

let userInput = prompt("Nhập một số bất kỳ:");
    
userInput = Number(userInput);

if (numbers.includes(userInput)) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");
}
