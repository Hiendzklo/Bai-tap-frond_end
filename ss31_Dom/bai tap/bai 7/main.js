let todoList = [
  { id: 1, task: "Hit the gym", completed: false },
  { id: 2, task: "Pay bills", completed: false },
  { id: 3, task: "Meet George", completed: false },
  { id: 4, task: "Buy eggs", completed: false },
  { id: 5, task: "Read a book", completed: false },
  { id: 6, task: "Organize office", completed: false },
];

// Lấy các phần tử cần thiết trong HTML
const inputField = document.getElementById("myInput");
const addButton = document.querySelector(".addBtn");
const ulList = document.getElementById("myUL");

// Hàm hiển thị danh sách công việc
function displayTasks() {
  ulList.innerHTML = ""; // Clear any existing list
  todoList.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.task;

    // Thêm chức năng đánh dấu công việc hoàn thành
    li.addEventListener("click", function () {
      item.completed = !item.completed;
      li.classList.toggle("checked", item.completed);
    });

    ulList.appendChild(li);
  });
}

// Hàm thêm công việc mới
addButton.addEventListener("click", function () {
  const newTask = inputField.value.trim();
  if (newTask) {
    // Tạo đối tượng công việc mới
    const newTaskObject = {
      id: todoList.length + 1,
      task: newTask,
      completed: false,
    };

    // Thêm công việc mới vào mảng todoList
    todoList.push(newTaskObject);

    // Hiển thị lại danh sách
    displayTasks();

    // Xóa input sau khi thêm công việc
    inputField.value = "";
  }
});

// Hiển thị các công việc khi tải trang
displayTasks();
