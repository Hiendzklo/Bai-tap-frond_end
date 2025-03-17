let menu = {};

// Hàm thêm món ăn vào danh mục
function addDish(category, name, price, description) {
  if (!menu[category]) {
    menu[category] = [];
  }
  menu[category].push({ name, price: parseFloat(price), description });
  console.log(`Đã thêm món ăn "${name}" vào danh mục "${category}".`);
}

// Hàm xóa món ăn theo tên khỏi danh mục
function deleteDish(category, name) {
  if (!menu[category]) {
    console.log(`Danh mục "${category}" không tồn tại.`);
    return;
  }
  let index = menu[category].findIndex((dish) => dish.name === name);
  if (index !== -1) {
    menu[category].splice(index, 1);
    console.log(`Đã xóa món ăn "${name}" khỏi danh mục "${category}".`);
  } else {
    console.log(
      `Không tìm thấy món ăn "${name}" trong danh mục "${category}".`
    );
  }
}

// Hàm cập nhật thông tin món ăn theo tên
function updateDish(category, oldName, newName, price, description) {
  if (!menu[category]) {
    console.log(`Danh mục "${category}" không tồn tại.`);
    return;
  }
  let dish = menu[category].find((dish) => dish.name === oldName);
  if (dish) {
    dish.name = newName;
    dish.price = parseFloat(price);
    dish.description = description;
    console.log(`Đã cập nhật món ăn "${oldName}" thành "${newName}".`);
  } else {
    console.log(
      `Không tìm thấy món ăn "${oldName}" trong danh mục "${category}".`
    );
  }
}

// Hàm hiển thị toàn bộ menu
function displayMenu() {
  if (Object.keys(menu).length === 0) {
    console.log("Menu hiện đang trống.");
  } else {
    console.log("Danh sách menu nhà hàng:");
    for (let category in menu) {
      console.log(`\nDanh mục: ${category}`);
      menu[category].forEach((dish) => {
        console.log(
          `  - Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}`
        );
      });
    }
  }
}

// Hàm tìm kiếm món ăn theo tên
function searchDish(name) {
  let found = [];
  for (let category in menu) {
    menu[category].forEach((dish) => {
      if (dish.name.toLowerCase().includes(name.toLowerCase())) {
        found.push({ category, ...dish });
      }
    });
  }
  if (found.length > 0) {
    console.log("Kết quả tìm kiếm:");
    found.forEach((dish) => {
      console.log(
        `Danh mục: ${dish.category}, Tên: ${dish.name}, Giá: ${dish.price}, Mô tả: ${dish.description}`
      );
    });
  } else {
    console.log(`Không tìm thấy món ăn "${name}" trong menu.`);
  }
}

function showMenu() {
  let option;
  do {
    option = prompt(
      "Chọn chức năng:\n" +
        "1. Thêm món ăn vào danh mục.\n" +
        "2. Xóa món ăn theo tên khỏi danh mục.\n" +
        "3. Cập nhật thông tin theo tên của món ăn.\n" +
        "4. Hiển thị toàn bộ menu.\n" +
        "5. Tìm kiếm món ăn theo tên trong toàn bộ menu.\n" +
        "6. Thoát."
    );

    switch (option) {
      case "1":
        const category = prompt("Nhập danh mục:");
        const name = prompt("Nhập tên món ăn:");
        const price = prompt("Nhập giá món ăn:");
        const description = prompt("Nhập mô tả món ăn:");
        addDish(category, name, price, description);
        break;
      case "2":
        const delCategory = prompt("Nhập danh mục của món cần xóa:");
        const delName = prompt("Nhập tên món ăn cần xóa:");
        deleteDish(delCategory, delName);
        break;
      case "3":
        const updCategory = prompt("Nhập danh mục của món cần cập nhật:");
        const oldName = prompt("Nhập tên món ăn cũ:");
        const newName = prompt("Nhập tên món ăn mới:");
        const newPrice = prompt("Nhập giá mới:");
        const newDescription = prompt("Nhập mô tả mới:");
        updateDish(updCategory, oldName, newName, newPrice, newDescription);
        break;
      case "4":
        displayMenu();
        break;
      case "5":
        const searchName = prompt("Nhập tên món ăn cần tìm:");
        searchDish(searchName);
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
