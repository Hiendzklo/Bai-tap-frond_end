let phones = [
  { id: 1, name: "iPhone 13", price: 25000000, quantity: 30, company: "Apple" },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 22000000,
    quantity: 50,
    company: "Samsung",
  },
  {
    id: 3,
    name: "Xiaomi Mi 11",
    price: 12000000,
    quantity: 40,
    company: "Xiaomi",
  },
  {
    id: 4,
    name: "Samsung Galaxy Note 20",
    price: 18000000,
    quantity: 20,
    company: "Samsung",
  },
];

// Giỏ hàng của người dùng
let cart = [];

// Hàm hiển thị menu
function displayMenu() {
  return prompt(
    "Chọn thao tác:\n1. Hiển thị danh sách điện thoại theo hãng.\n2. Thêm điện thoại mới vào cửa hàng.\n3. Tìm kiếm điện thoại theo tên hoặc id.\n4. Mua điện thoại.\n5. Thanh toán và xóa giỏ hàng.\n6. Sắp xếp điện thoại theo giá.\n7. Hiển thị tổng số tiền trong giỏ hàng.\n8. Hiển thị tổng số lượng điện thoại theo từng hãng.\n9. Thoát."
  );
}

// Hàm hiển thị danh sách điện thoại theo hãng
function displayPhonesByCompany() {
  let company = prompt("Nhập hãng điện thoại (Apple, Samsung, Xiaomi):");
  let filteredPhones = phones.filter(
    (phone) => phone.company.toLowerCase() === company.toLowerCase()
  );

  if (filteredPhones.length > 0) {
    let phoneList = filteredPhones
      .map(
        (phone) =>
          `${phone.name} - Giá: ${phone.price} - Số lượng: ${phone.quantity}`
      )
      .join("\n");
    alert("Sản phẩm của hãng " + company + ":\n" + phoneList);
  } else {
    alert("Không có điện thoại của hãng này.");
  }
}

// Hàm thêm điện thoại mới vào cửa hàng
function addNewPhone() {
  let name = prompt("Nhập tên điện thoại:");
  let price = prompt("Nhập giá điện thoại:");
  let quantity = prompt("Nhập số lượng điện thoại:");
  let company = prompt("Nhập hãng điện thoại:");

  phones.push({
    id: phones.length + 1,
    name,
    price: parseInt(price),
    quantity: parseInt(quantity),
    company,
  });
  alert("Điện thoại đã được thêm vào cửa hàng.");
}

// Hàm tìm kiếm điện thoại theo tên hoặc id
function findPhoneByNameOrId() {
  let searchTerm = prompt("Nhập tên điện thoại hoặc id điện thoại:");
  let foundPhone = phones.find(
    (phone) =>
      phone.id == searchTerm ||
      phone.name.toLowerCase() === searchTerm.toLowerCase()
  );

  if (foundPhone) {
    alert(
      `Điện thoại tìm thấy: ${foundPhone.name} - Giá: ${foundPhone.price} - Số lượng: ${foundPhone.quantity}`
    );
  } else {
    alert("Không tìm thấy điện thoại.");
  }
}

// Hàm mua điện thoại
function buyPhone() {
  let phoneList = phones
    .map(
      (phone) =>
        `${phone.id}. ${phone.name} - Giá: ${phone.price} - Số lượng: ${phone.quantity}`
    )
    .join("\n");
  let phoneId = prompt("Chọn điện thoại theo ID để mua:\n" + phoneList);

  let phone = phones.find((p) => p.id == phoneId);

  if (phone) {
    let quantityToBuy = prompt("Nhập số lượng bạn muốn mua:");
    quantityToBuy = parseInt(quantityToBuy);

    if (quantityToBuy <= phone.quantity && quantityToBuy > 0) {
      phone.quantity -= quantityToBuy;
      cart.push({ ...phone, quantity: quantityToBuy });
      alert(`Đã thêm ${quantityToBuy} chiếc ${phone.name} vào giỏ hàng.`);
    } else {
      alert("Số lượng điện thoại không đủ.");
    }
  } else {
    alert("Điện thoại không hợp lệ.");
  }
}

// Hàm thanh toán và xóa giỏ hàng
function checkout() {
  let totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  cart = []; // Xóa toàn bộ giỏ hàng sau khi thanh toán
  alert(
    `Thanh toán thành công! Tổng số tiền là: ${totalAmount} VND. Giỏ hàng đã được xóa.`
  );
}

// Hàm sắp xếp điện thoại theo giá
function sortPhonesByPrice() {
  let sortOrder = prompt("Sắp xếp theo giá: \n1. Tăng dần\n2. Giảm dần");
  let sortedPhones;

  if (sortOrder === "1") {
    sortedPhones = [...phones].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "2") {
    sortedPhones = [...phones].sort((a, b) => b.price - a.price);
  } else {
    alert("Lựa chọn không hợp lệ.");
    return;
  }

  let sortedList = sortedPhones
    .map((phone) => `${phone.name} - Giá: ${phone.price}`)
    .join("\n");
  alert("Sách sắp xếp theo giá:\n" + sortedList);
}

// Hàm hiển thị tổng số tiền trong giỏ hàng
function displayTotalAmount() {
  let totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  alert(`Tổng số tiền trong giỏ hàng: ${totalAmount} VND`);
}

// Hàm hiển thị tổng số lượng điện thoại theo từng hãng
function displayTotalQuantityByCompany() {
  let quantityByCompany = phones.reduce((result, phone) => {
    if (!result[phone.company]) {
      result[phone.company] = 0;
    }
    result[phone.company] += phone.quantity;
    return result;
  }, {});

  let result = Object.entries(quantityByCompany)
    .map(([company, quantity]) => `${company}: ${quantity} điện thoại`)
    .join("\n");
  alert("Tổng số lượng điện thoại theo từng hãng:\n" + result);
}

function main() {
  let option;

  do {
    option = displayMenu();

    switch (option) {
      case "1":
        displayPhonesByCompany();
        break;
      case "2":
        addNewPhone();
        break;
      case "3":
        findPhoneByNameOrId();
        break;
      case "4":
        buyPhone();
        break;
      case "5":
        checkout();
        break;
      case "6":
        sortPhonesByPrice();
        break;
      case "7":
        displayTotalAmount();
        break;
      case "8":
        displayTotalQuantityByCompany();
        break;
      case "9":
        alert("Cảm ơn bạn đã sử dụng chương trình!");
        break;
      default:
        alert("Lựa chọn không hợp lệ.");
    }
  } while (option !== "9");
}

main();
