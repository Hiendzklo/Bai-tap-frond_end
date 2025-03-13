function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      console.log('Lỗi: Không được phép chia cho số không.');
      return null;
    }
    return a / b;
  }
  
  function displayMenu() {
    let choice = prompt("Chọn phép toán:\n1. Cộng\n2. Trừ\n3. Nhân\n4. Chia\n5. Thoát");
  
    switch(choice) {
      case '1':
        let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
        let num2 = parseFloat(prompt("Nhập số thứ hai:"));
        console.log(`Tổng hai số là: ${add(num1, num2)}`);
        break;
      case '2':
        num1 = parseFloat(prompt("Nhập số thứ nhất:"));
        num2 = parseFloat(prompt("Nhập số thứ hai:"));
        console.log(`Hiệu hai số là: ${subtract(num1, num2)}`);
        break;
      case '3':
        num1 = parseFloat(prompt("Nhập số thứ nhất:"));
        num2 = parseFloat(prompt("Nhập số thứ hai:"));
        console.log(`Tích hai số là: ${multiply(num1, num2)}`);
        break;
      case '4':
        num1 = parseFloat(prompt("Nhập số thứ nhất:"));
        num2 = parseFloat(prompt("Nhập số thứ hai:"));
        console.log(`Thương hai số là: ${divide(num1, num2)}`);
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
  