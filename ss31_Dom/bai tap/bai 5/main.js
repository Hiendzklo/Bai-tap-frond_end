const employees = [
  { id: 1, name: "John", age: 18, address: "New York" },
  { id: 2, name: "Mike", age: 22, address: "Canada" },
  { id: 3, name: "Linda", age: 19, address: "California" },
  { id: 4, name: "Peter", age: 25, address: "London" },
  { id: 5, name: "Tony", age: 17, address: "New York" },
];

// Lấy phần tử tbody trong bảng
const tbody = document.querySelector("#employeeTable tbody");

// Duyệt qua mảng employees và thêm dữ liệu vào bảng
employees.forEach((employee, index) => {
  const row = document.createElement("tr");

  // Thêm cột STT
  const cell1 = document.createElement("td");
  cell1.textContent = index + 1;
  row.appendChild(cell1);

  // Thêm cột NAME
  const cell2 = document.createElement("td");
  cell2.textContent = employee.name;
  row.appendChild(cell2);

  // Thêm cột AGE
  const cell3 = document.createElement("td");
  cell3.textContent = employee.age;
  row.appendChild(cell3);

  // Thêm cột ADDRESS
  const cell4 = document.createElement("td");
  cell4.textContent = employee.address;
  row.appendChild(cell4);

  // Thêm dòng vào tbody
  tbody.appendChild(row);
});
