function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  function calculateRectangleCircumference(length, width) {
    return 2 * (length + width);
  }
  
  function displayMenu() {
    let choice = prompt("Chọn chức năng:\n1. Tính diện tích hình tròn\n2. Tính chu vi hình tròn\n3. Tính diện tích hình chữ nhật\n4. Tính chu vi hình chữ nhật\n5. Thoát");
  
    switch(choice) {
      case '1':
        let radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
        console.log("Diện tích hình tròn là: " + calculateCircleArea(radius));
        break;
      case '2':
        radius = parseFloat(prompt("Nhập bán kính hình tròn:"));
        console.log("Chu vi hình tròn là: " + calculateCircleCircumference(radius));
        break;
      case '3':
        let length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
        let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
        console.log("Diện tích hình chữ nhật là: " + calculateRectangleArea(length, width));
        break;
      case '4':
        length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
        width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
        console.log("Chu vi hình chữ nhật là: " + calculateRectangleCircumference(length, width));
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
  