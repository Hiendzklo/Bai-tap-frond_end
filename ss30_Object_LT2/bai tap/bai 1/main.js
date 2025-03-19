let products = [
  {
    id: 1,
    name: "món nếp",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];

// Giỏ hàng của người dùng
let cart = [];

// Hàm hiển thị menu
function displayMenu() {
  return prompt(
    "Chọn thao tác:\n" +
      "1. Hiển thị các sản phẩm theo tên danh mục.\n" +
      "2. Chọn sản phẩm để mua.\n" +
      "3. Sắp xếp các sản phẩm theo giá.\n" +
      "4. Tính tổng tiền thanh toán.\n " +
      "5. Thoát."
  );
}

// Hàm hiển thị các sản phẩm theo danh mục
function displayProductsByCategory() {
  let category = prompt("Nhập tên danh mục để hiển thị sản phẩm:");
  let filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredProducts.length > 0) {
    let productList = filteredProducts
      .map(
        (product) =>
          `${product.name} - Giá: ${product.price} - Số lượng: ${product.quantity}`
      )
      .join("\n");
    alert("Sản phẩm trong danh mục '" + category + "':\n" + productList);
  } else {
    alert("Không có sản phẩm trong danh mục này.");
  }
}

// Hàm chọn sản phẩm để mua
function chooseProductToBuy() {
  let productList = products
    .map(
      (product) =>
        `${product.id}. ${product.name} - Giá: ${product.price} - Số lượng: ${product.quantity}`
    )
    .join("\n");
  let productId = prompt("Chọn sản phẩm theo ID:\n" + productList);

  let product = products.find((p) => p.id == productId);

  if (product) {
    let quantityToBuy = prompt("Nhập số lượng bạn muốn mua:");
    quantityToBuy = parseInt(quantityToBuy);

    if (quantityToBuy <= product.quantity && quantityToBuy > 0) {
      product.quantity -= quantityToBuy;
      cart.push({ ...product, quantity: quantityToBuy });
      alert(`Đã thêm ${quantityToBuy} ${product.name} vào giỏ hàng.`);
    } else {
      alert("Số lượng sản phẩm không đủ.");
    }
  } else {
    alert("Sản phẩm không hợp lệ.");
  }
}

// Hàm sắp xếp sản phẩm theo giá
function sortProductsByPrice() {
  let sortedProducts = [...products].sort((a, b) => a.price - b.price);
  let sortedList = sortedProducts
    .map((product) => `${product.name} - Giá: ${product.price}`)
    .join("\n");
  alert("Sản phẩm sắp xếp theo giá:\n" + sortedList);
}

// Hàm tính tổng tiền thanh toán
function calculateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  alert(`Tổng tiền thanh toán: ${total} VND`);
}

// Chương trình chính
function main() {
  let option;

  do {
    option = displayMenu();

    switch (option) {
      case "1":
        displayProductsByCategory();
        break;
      case "2":
        chooseProductToBuy();
        break;
      case "3":
        sortProductsByPrice();
        break;
      case "4":
        calculateTotal();
        break;
      case "5":
        alert("Cảm ơn bạn đã sử dụng dịch vụ!");
        break;
      default:
        alert("Lựa chọn không hợp lệ.");
    }
  } while (option !== "5");
}

main();
