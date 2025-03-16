const company = {
  name: "RikkeiSoft",
  location: "Hà Nội",
  employees: [
    { name: "Nguyễn Văn Luân", position: "Developer" },
    { name: "Nguyễn Văn Hoàng", position: "Tester" },
    { name: "Hoàng Nam Cao", position: "Manager" },
  ],
};

console.log("Công ty: " + company.name);
console.log("Địa điểm: " + company.location);
console.log("Danh sách nhân viên:");
company.employees.forEach((employee) => {
  console.log("- " + employee.name);
});
