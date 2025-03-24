const taskForm = document.getElementById("taskForm");
const taskTable = document
  .getElementById("taskTable")
  .getElementsByTagName("tbody")[0];

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskTable.innerHTML = "";
  tasks.forEach((task, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.content}</td>
            <td>${task.dueDate}</td>
            <td>${task.status}</td>
            <td>${task.assignedTo}</td>
            <td>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </td>
        `;
    taskTable.appendChild(row);
  });
}

function editTask(index) {
  const task = tasks[index];
  document.getElementById("content").value = task.content;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("status").value = task.status;
  document.getElementById("assignedTo").value = task.assignedTo;

  taskForm.onsubmit = function (event) {
    event.preventDefault();
    task.content = document.getElementById("content").value;
    task.dueDate = document.getElementById("dueDate").value;
    task.status = document.getElementById("status").value;
    task.assignedTo = document.getElementById("assignedTo").value;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
    taskForm.reset();
    taskForm.onsubmit = addTask;
  };
}

function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }
}

function addTask(event) {
  event.preventDefault();

  const content = document.getElementById("content").value;
  const dueDate = document.getElementById("dueDate").value;
  const status = document.getElementById("status").value;
  const assignedTo = document.getElementById("assignedTo").value;

  const newTask = { content, dueDate, status, assignedTo };
  tasks.push(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  taskForm.reset();
}

taskForm.addEventListener("submit", addTask);
renderTasks();
