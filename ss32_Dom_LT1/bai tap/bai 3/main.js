// Lấy phần tử input, button và danh sách môn học
const subjectInput = document.getElementById("subjectInput");
const addButton = document.getElementById("addButton");
const subjectList = document.getElementById("subjectList");

// Mảng lưu trữ các môn học
const subjects = ["Toán", "Lý", "Hóa"];

// Hiển thị các môn học trong mảng subjects
function displaySubjects() {
  subjectList.innerHTML = ""; // Xóa danh sách hiện tại
  subjects.forEach((subject) => {
    const li = document.createElement("li");
    li.textContent = subject;
    subjectList.appendChild(li);
  });
}

// Thêm sự kiện click cho nút thêm môn học
addButton.addEventListener("click", function () {
  const newSubject = subjectInput.value.trim();

  if (newSubject) {
    subjects.push(newSubject); // Thêm môn học mới vào mảng
    displaySubjects(); // Cập nhật danh sách
    subjectInput.value = ""; // Xóa trường nhập liệu
  } else {
    alert("Tên môn học không được để trống!"); // Hiển thị cảnh báo nếu không nhập dữ liệu
  }
});

// Hiển thị danh sách môn học ban đầu
displaySubjects();
