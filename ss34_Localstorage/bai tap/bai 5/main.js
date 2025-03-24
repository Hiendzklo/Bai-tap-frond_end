// Lấy dữ liệu nhân viên từ localStorage và hiển thị lên bảng
function loadEmployeeData() {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const tbody = document.querySelector("#employee-table tbody");
  tbody.innerHTML = "";

  employees.forEach((employee, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.role}</td>
        `;
    tbody.appendChild(row);
  });
}

// Thêm nhân viên mới vào localStorage
document
  .getElementById("employee-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("employee-name").value;
    const role = document.getElementById("employee-role").value;

    if (name && role) {
      const employees = JSON.parse(localStorage.getItem("employees")) || [];
      employees.push({ name, role });

      // Lưu lại vào localStorage
      localStorage.setItem("employees", JSON.stringify(employees));

      // Tải lại danh sách nhân viên
      loadEmployeeData();

      // Reset form input
      document.getElementById("employee-name").value = "";
      document.getElementById("employee-role").value = "";
    }
  });

// Tải dữ liệu nhân viên khi trang được tải
document.addEventListener("DOMContentLoaded", loadEmployeeData);
