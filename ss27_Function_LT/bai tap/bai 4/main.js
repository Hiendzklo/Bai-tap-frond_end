let numbers = [];  

function enterNumbers() {
  let count = parseInt(prompt("Nhập số lượng các số nguyên:"));
  for (let i = 0; i < count; i++) {
    let num = parseInt(prompt("Nhập số nguyên thứ " + (i + 1) + ":"));
    numbers.push(num);
  }
  console.log("Danh sách số nguyên đã được nhập thành công.");
}

function calculateAverage() {
  if (numbers.length === 0) {
    console.log("Danh sách số trống.");
    return;
  }
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  let average = sum / numbers.length;
  console.log("Trung bình các số là: " + average);
}

function findLargestEven() {
  let evenNumbers = numbers.filter(num => num % 2 === 0);
  if (evenNumbers.length === 0) {
    console.log("Không có số chẵn trong danh sách.");
    return;
  }
  let largestEven = Math.max(...evenNumbers);
  console.log("Số chẵn lớn nhất là: " + largestEven);
}

function findSmallestOdd() {
  let oddNumbers = numbers.filter(num => num % 2 !== 0);
  if (oddNumbers.length === 0) {
    console.log("Không có số lẻ trong danh sách.");
    return;
  }
  let smallestOdd = Math.min(...oddNumbers);
  console.log("Số lẻ nhỏ nhất là: " + smallestOdd);
}

function displayMenu() {
  let choice = prompt("Chọn chức năng:\n1. Nhập danh sách số nguyên\n2. Tính trung bình các số\n3. Tìm số chẵn lớn nhất\n4. Tìm số lẻ nhỏ nhất\n5. Thoát");

  switch(choice) {
    case '1':
      enterNumbers();
      break;
    case '2':
      calculateAverage();
      break;
    case '3':
      findLargestEven();
      break;
    case '4':
      findSmallestOdd();
      break;
    case '5':
      console.log("Thoát khỏi chương trình.");
      return;
    default:
      console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
  }

  displayMenu();
}

displayMenu();
