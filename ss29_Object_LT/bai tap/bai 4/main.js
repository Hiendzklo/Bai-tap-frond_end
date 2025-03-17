let tasks = [];

// Hàm thêm công việc mới
function addTask(id, name, description, startTime, status) {
  const task = { id, name, description, startTime, status };
  tasks.push(task);
  console.log(`Đã thêm công việc: ${name}`);
}

// Hàm hiển thị tất cả công việc
function displayTasks() {
  if (tasks.length === 0) {
    console.log("Danh sách công việc trống.");
  } else {
    console.log("Danh sách công việc:");
    tasks.forEach((task) => {
      console.log(
        `ID: ${task.id}, Tên: ${task.name}, Mô tả: ${task.description}, Bắt đầu: ${task.startTime}, Trạng thái: ${task.status}`
      );
    });
  }
}

// Hàm cập nhật trạng thái công việc theo ID
function updateTaskStatus(id, newStatus) {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.status = newStatus;
    console.log(
      `Đã cập nhật trạng thái công việc ID ${id} thành: ${newStatus}`
    );
  } else {
    console.log("Không tìm thấy công việc với ID này.");
  }
}

// Hàm lọc công việc theo trạng thái (hoàn thành hoặc chưa hoàn thành)
function filterTasksByStatus(status) {
  const filteredTasks = tasks.filter(
    (t) => t.status.toLowerCase() === status.toLowerCase()
  );
  if (filteredTasks.length === 0) {
    console.log(`Không có công việc nào có trạng thái "${status}".`);
  } else {
    console.log(`Danh sách công việc có trạng thái "${status}":`);
    filteredTasks.forEach((task) => {
      console.log(
        `ID: ${task.id}, Tên: ${task.name}, Mô tả: ${task.description}, Bắt đầu: ${task.startTime}`
      );
    });
  }
}

// Hàm sắp xếp công việc theo trạng thái
function sortTasksByStatus() {
  tasks.sort((a, b) => a.status.localeCompare(b.status));
  console.log("Đã sắp xếp công việc theo trạng thái.");
  displayTasks();
}

function showMenu() {
  let option;
  do {
    option = prompt(
      "Chọn chức năng:\n" +
        "1. Thêm công việc mới.\n" +
        "2. Hiển thị tất cả các công việc.\n" +
        "3. Cập nhật trạng thái công việc theo ID.\n" +
        "4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.\n" +
        "5. Sắp xếp các công việc theo trạng thái công việc.\n" +
        "6. Thoát."
    );

    switch (option) {
      case "1":
        const id = prompt("Nhập ID công việc:");
        const name = prompt("Nhập tên công việc:");
        const description = prompt("Nhập mô tả công việc:");
        const startTime = prompt("Nhập thời gian bắt đầu:");
        const status = prompt(
          "Nhập trạng thái (hoàn thành / chưa hoàn thành):"
        );
        addTask(id, name, description, startTime, status);
        break;
      case "2":
        displayTasks();
        break;
      case "3":
        const updateId = prompt("Nhập ID công việc cần cập nhật:");
        const newStatus = prompt(
          "Nhập trạng thái mới (hoàn thành / chưa hoàn thành):"
        );
        updateTaskStatus(updateId, newStatus);
        break;
      case "4":
        const filterStatus = prompt(
          "Nhập trạng thái cần lọc (hoàn thành / chưa hoàn thành):"
        );
        filterTasksByStatus(filterStatus);
        break;
      case "5":
        sortTasksByStatus();
        break;
      case "6":
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ.");
    }
  } while (option !== "6");
}

showMenu();
