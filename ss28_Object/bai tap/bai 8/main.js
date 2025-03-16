let employees = [];

// Hàm thêm nhân viên mới
function addEmployee(id, name, position, salary) {
  const employee = {
    id: id,
    name: name,
    position: position,
    salary: salary,
  };
  employees.push(employee);
  console.log(`Nhân viên ${name} đã được thêm.`);
}

// Hàm xóa nhân viên theo ID
function deleteEmployeeById(id) {
  const index = employees.findIndex((employee) => employee.id === id);
  if (index !== -1) {
    const employee = employees[index];
    const confirmDelete = confirm(
      `Bạn có chắc chắn muốn xóa nhân viên ${employee.name}?`
    );
    if (confirmDelete) {
      employees.splice(index, 1);
      console.log(`Nhân viên ${employee.name} đã bị xóa.`);
    } else {
      console.log(`Hủy bỏ việc xóa nhân viên ${employee.name}`);
    }
  } else {
    console.log("Không tìm thấy nhân viên với ID này.");
  }
}

// Hàm cập nhật mức lương của nhân viên theo ID
function updateSalary(id, newSalary) {
  const employee = employees.find((emp) => emp.id === id);
  if (employee) {
    employee.salary = newSalary;
    console.log(
      `Mức lương của ${employee.name} đã được cập nhật. Mức lương mới: ${newSalary}`
    );
  } else {
    console.log("Không tìm thấy nhân viên với ID này.");
  }
}

// Hàm tìm nhân viên theo tên
function findEmployeeByName(name) {
  const employee = employees.find(
    (emp) => emp.name.toLowerCase() === name.toLowerCase()
  );
  if (employee) {
    console.log(
      `Tìm thấy nhân viên: ${employee.name}, Vị trí: ${employee.position}, Lương: ${employee.salary}`
    );
  } else {
    console.log("Không tìm thấy nhân viên với tên này.");
  }
}

// Hàm hiển thị menu và yêu cầu người dùng chọn
function displayMenu() {
  let choice;
  do {
    choice = prompt(
      "Chọn một hành động:\n" +
        "1. Thêm nhân viên\n" +
        "2. Xóa nhân viên\n" +
        "3. Cập nhật lương nhân viên\n" +
        "4. Tìm nhân viên theo tên\n" +
        "5. Thoát"
    );

    switch (choice) {
      case "1":
        const id1 = prompt("Nhập ID nhân viên:");
        const name1 = prompt("Nhập tên nhân viên:");
        const position1 = prompt("Nhập vị trí công việc:");
        const salary1 = prompt("Nhập mức lương:");
        addEmployee(id1, name1, position1, salary1);
        break;

      case "2":
        const id2 = prompt("Nhập ID nhân viên cần xóa:");
        deleteEmployeeById(id2);
        break;

      case "3":
        const id3 = prompt("Nhập ID nhân viên cần cập nhật lương:");
        const newSalary = prompt("Nhập mức lương mới:");
        updateSalary(id3, newSalary);
        break;

      case "4":
        const name4 = prompt("Nhập tên nhân viên cần tìm:");
        findEmployeeByName(name4);
        break;

      case "5":
        console.log("Thoát khỏi chương trình.");
        break;

      default:
        console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
  } while (choice !== "5");
}

displayMenu();
