let contacts = [];

// Hàm thêm một liên hệ vào danh bạ
function addContact(id, name, email, phone) {
  const contact = { id, name, email, phone };
  contacts.push(contact);
  console.log("Đã thêm liên hệ: ", contact);
}

// Hàm hiển thị danh sách liên hệ
function displayContacts() {
  if (contacts.length === 0) {
    console.log("Danh bạ rỗng.");
  } else {
    console.log("Danh sách liên hệ:");
    contacts.forEach((contact) => {
      console.log(
        `ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, Số điện thoại: ${contact.phone}`
      );
    });
  }
}

// Hàm tìm kiếm thông tin liên hệ theo số điện thoại
function searchContactByPhone(phone) {
  const contact = contacts.find((c) => c.phone === phone);
  if (contact) {
    console.log(`Tìm thấy liên hệ: ${contact.name}, Email: ${contact.email}`);
  } else {
    console.log("Không tìm thấy liên hệ với số điện thoại này.");
  }
}

// Hàm cập nhật thông tin liên hệ theo ID
function updateContact(id, name, email, phone) {
  const contact = contacts.find((c) => c.id === id);
  if (contact) {
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
    console.log("Đã cập nhật thông tin liên hệ: ", contact);
  } else {
    console.log("Không tìm thấy liên hệ với ID này.");
  }
}

// Hàm xóa một liên hệ theo ID
function deleteContact(id) {
  const index = contacts.findIndex((c) => c.id === id);
  if (index !== -1) {
    contacts.splice(index, 1);
    console.log("Đã xóa liên hệ.");
  } else {
    console.log("Không tìm thấy liên hệ với ID này.");
  }
}

function showMenu() {
  let option;
  do {
    option = prompt(
      "Chọn chức năng:\n" +
        "1. Thêm đối tượng Contact vào danh sách liên hệ.\n" +
        "2. Hiển thị danh sách danh bạ.\n" +
        "3. Tìm kiếm thông tin Contact theo số điện thoại.\n" +
        "4. Cập nhật thông tin Contact (name, email, phone) theo id.\n" +
        "5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.\n" +
        "6. Thoát."
    );

    switch (option) {
      case "1":
        const id = prompt("Nhập ID:");
        const name = prompt("Nhập tên:");
        const email = prompt("Nhập email:");
        const phone = prompt("Nhập số điện thoại:");
        addContact(id, name, email, phone);
        break;
      case "2":
        displayContacts();
        break;
      case "3":
        const searchPhone = prompt("Nhập số điện thoại cần tìm:");
        searchContactByPhone(searchPhone);
        break;
      case "4":
        const updateId = prompt("Nhập ID cần cập nhật:");
        const updateName = prompt("Nhập tên mới:");
        const updateEmail = prompt("Nhập email mới:");
        const updatePhone = prompt("Nhập số điện thoại mới:");
        updateContact(updateId, updateName, updateEmail, updatePhone);
        break;
      case "5":
        const deleteId = prompt("Nhập ID cần xóa:");
        deleteContact(deleteId);
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
