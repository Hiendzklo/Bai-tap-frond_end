let students = [];  

function enterStudents() {
  let numStudents = parseInt(prompt("Nhập số lượng sinh viên:"));
  
  for (let i = 0; i < numStudents; i++) {
    let studentName = prompt("Nhập tên sinh viên thứ " + (i + 1) + ":");
    students.push(studentName);
  }
  console.log("Danh sách sinh viên đã được nhập thành công.");
}

function displayStudents() {
  if (students.length === 0) {
    console.log("Danh sách sinh viên hiện tại trống.");
  } else {
    console.log("Danh sách sinh viên:");
    students.forEach((student, index) => {
      console.log((index + 1) + ". " + student);
    });
  }
}

function findStudent() {
  let nameToFind = prompt("Nhập tên sinh viên cần tìm:");
  let found = students.filter(student => student.toLowerCase() === nameToFind.toLowerCase());
  
  if (found.length > 0) {
    console.log("Sinh viên tìm thấy: " + found.join(", "));
  } else {
    console.log("Sinh viên không có trong danh sách.");
  }
}

function deleteStudent() {
  let nameToDelete = prompt("Nhập tên sinh viên cần xóa:");
  let index = students.indexOf(nameToDelete);

  if (index !== -1) {
    students.splice(index, 1);
    console.log("Đã xóa sinh viên " + nameToDelete);
  } else {
    console.log("Sinh viên không có trong danh sách.");
  }
}

function displayMenu() {
  let choice = prompt("Chọn chức năng:\n1. Nhập danh sách sinh viên\n2. Hiển thị danh sách sinh viên\n3. Tìm sinh viên theo tên\n4. Xóa sinh viên khỏi danh sách\n5. Thoát");

  switch(choice) {
    case '1':
      enterStudents();
      break;
    case '2':
      displayStudents();
      break;
    case '3':
      findStudent();
      break;
    case '4':
      deleteStudent();
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
