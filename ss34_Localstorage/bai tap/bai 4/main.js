// Lấy các phần tử trong HTML
const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Kiểm tra và lấy danh sách Todo từ LocalStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Hàm hiển thị Todo List
function displayTodos() {
  // Xóa hết các mục todo cũ trong danh sách
  todoList.innerHTML = "";

  // Duyệt qua mảng todos và thêm chúng vào danh sách
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xóa";
    deleteBtn.onclick = function () {
      deleteTodo(index);
    };

    // Thêm nút xóa vào li
    li.appendChild(deleteBtn);

    // Thêm li vào ul
    todoList.appendChild(li);
  });
}

// Hàm thêm Todo mới
function addTodo() {
  const newTodo = todoInput.value.trim();
  if (newTodo !== "") {
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();
    todoInput.value = "";
  } else {
    alert("Vui lòng nhập một việc cần làm!");
  }
}

// Hàm xóa Todo
function deleteTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  displayTodos();
}

// Hiển thị danh sách Todo ban đầu
displayTodos();

// Thêm sự kiện khi bấm nút "Thêm"
addBtn.addEventListener("click", addTodo);

// Cũng cho phép nhấn Enter để thêm Todo
todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
