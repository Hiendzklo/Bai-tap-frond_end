const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Hàm thêm nhiệm vụ vào danh sách
function addTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("Tên nhiệm vụ không được để trống!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskValue;

  // Tạo nút xóa
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  // Xử lý sự kiện xóa
  deleteBtn.addEventListener("click", function () {
    if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này?")) {
      li.remove();
    }
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Xóa nội dung nhập sau khi thêm
  taskInput.value = "";
}

// Sự kiện click vào nút thêm nhiệm vụ
addTaskBtn.addEventListener("click", addTask);

// Sự kiện Enter để thêm nhiệm vụ
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
