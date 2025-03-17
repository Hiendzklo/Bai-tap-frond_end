let products = [];

// Hàm thêm sản phẩm vào danh sách
function addProduct(id, name, price, category, quantity) {
  const product = {
    id,
    name,
    price: parseFloat(price),
    category,
    quantity: parseInt(quantity),
  };
  products.push(product);
  console.log("Đã thêm sản phẩm:", product);
}

// Hàm hiển thị tất cả sản phẩm
function displayProducts() {
  if (products.length === 0) {
    console.log("Danh sách sản phẩm rỗng.");
  } else {
    console.log("Danh sách sản phẩm:");
    products.forEach((product) => {
      console.log(
        `ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`
      );
    });
  }
}

// Hàm hiển thị chi tiết sản phẩm theo ID
function displayProductById(id) {
  const product = products.find((p) => p.id === id);
  if (product) {
    console.log("Chi tiết sản phẩm:", product);
  } else {
    console.log("Không tìm thấy sản phẩm với ID này.");
  }
}

// Hàm cập nhật thông tin sản phẩm theo ID
function updateProduct(id, name, price, category, quantity) {
  const product = products.find((p) => p.id === id);
  if (product) {
    product.name = name;
    product.price = parseFloat(price);
    product.category = category;
    product.quantity = parseInt(quantity);
    console.log("Đã cập nhật sản phẩm:", product);
  } else {
    console.log("Không tìm thấy sản phẩm với ID này.");
  }
}

// Hàm xóa sản phẩm theo ID
function deleteProduct(id) {
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    console.log("Đã xóa sản phẩm.");
  } else {
    console.log("Không tìm thấy sản phẩm với ID này.");
  }
}

// Hàm lọc sản phẩm theo khoảng giá
function filterProductsByPrice(minPrice, maxPrice) {
  const filteredProducts = products.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );
  if (filteredProducts.length === 0) {
    console.log("Không có sản phẩm nào trong khoảng giá này.");
  } else {
    console.log("Danh sách sản phẩm trong khoảng giá:");
    filteredProducts.forEach((product) => {
      console.log(
        `ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}`
      );
    });
  }
}

function showMenu() {
  let option;
  do {
    option = prompt(
      "Chọn chức năng:\n" +
        "1. Thêm sản phẩm vào danh sách sản phẩm.\n" +
        "2. Hiển thị tất cả sản phẩm.\n" +
        "3. Hiển thị chi tiết sản phẩm theo id.\n" +
        "4. Cập nhật thông tin sản phẩm theo id.\n" +
        "5. Xóa sản phẩm theo id.\n" +
        "6. Lọc sản phẩm theo khoảng giá.\n" +
        "7. Thoát."
    );

    switch (option) {
      case "1":
        const id = prompt("Nhập ID sản phẩm:");
        const name = prompt("Nhập tên sản phẩm:");
        const price = prompt("Nhập giá sản phẩm:");
        const category = prompt("Nhập danh mục sản phẩm:");
        const quantity = prompt("Nhập số lượng sản phẩm:");
        addProduct(id, name, price, category, quantity);
        break;
      case "2":
        displayProducts();
        break;
      case "3":
        const searchId = prompt("Nhập ID sản phẩm cần xem:");
        displayProductById(searchId);
        break;
      case "4":
        const updateId = prompt("Nhập ID sản phẩm cần cập nhật:");
        const updateName = prompt("Nhập tên mới:");
        const updatePrice = prompt("Nhập giá mới:");
        const updateCategory = prompt("Nhập danh mục mới:");
        const updateQuantity = prompt("Nhập số lượng mới:");
        updateProduct(
          updateId,
          updateName,
          updatePrice,
          updateCategory,
          updateQuantity
        );
        break;
      case "5":
        const deleteId = prompt("Nhập ID sản phẩm cần xóa:");
        deleteProduct(deleteId);
        break;
      case "6":
        const minPrice = parseFloat(prompt("Nhập giá tối thiểu:"));
        const maxPrice = parseFloat(prompt("Nhập giá tối đa:"));
        filterProductsByPrice(minPrice, maxPrice);
        break;
      case "7":
        console.log("Thoát chương trình.");
        break;
      default:
        console.log("Lựa chọn không hợp lệ.");
    }
  } while (option !== "7");
}

showMenu();
