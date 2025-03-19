let books = [
  {
    id: 1,
    name: "Harry Potter",
    price: 200000,
    quantity: 50,
    category: "Fantasy",
  },
  {
    id: 2,
    name: "The Hobbit",
    price: 150000,
    quantity: 30,
    category: "Fantasy",
  },
  {
    id: 3,
    name: "To Kill a Mockingbird",
    price: 120000,
    quantity: 20,
    category: "Classics",
  },
  { id: 4, name: "1984", price: 180000, quantity: 25, category: "Classics" },
  {
    id: 5,
    name: "A Brief History of Time",
    price: 250000,
    quantity: 15,
    category: "Science",
  },
];

// Giỏ hàng của người dùng
let cart = [];

// Hàm hiển thị menu
function displayMenu() {
  return prompt(
    "Chọn thao tác:\n1. Hiển thị danh sách sách theo thể loại.\n2. Thêm sách mới vào kho.\n3. Tìm sách theo tên hoặc id.\n4. Mua sách.\n5. Sắp xếp sách theo giá.\n6. Tính tổng số lượng sách đã mua và tổng tiền.\n7. Hiển thị tổng số lượng sách trong kho.\n8. Thoát."
  );
}

// Hàm hiển thị danh sách sách theo thể loại
function displayBooksByCategory() {
  let category = prompt("Nhập thể loại sách để hiển thị:");
  let filteredBooks = books.filter(
    (book) => book.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredBooks.length > 0) {
    let bookList = filteredBooks
      .map(
        (book) =>
          `${book.name} - Giá: ${book.price} - Số lượng: ${book.quantity}`
      )
      .join("\n");
    alert("Sách trong thể loại '" + category + "':\n" + bookList);
  } else {
    alert("Không có sách trong thể loại này.");
  }
}

// Hàm thêm sách mới vào kho
function addNewBook() {
  let name = prompt("Nhập tên sách mới:");
  let price = prompt("Nhập giá sách:");
  let quantity = prompt("Nhập số lượng sách:");
  let category = prompt("Nhập thể loại sách:");

  books.push({
    id: books.length + 1,
    name,
    price: parseInt(price),
    quantity: parseInt(quantity),
    category,
  });
  alert("Sách đã được thêm vào kho.");
}

// Hàm tìm sách theo tên hoặc id
function findBookByNameOrId() {
  let searchTerm = prompt("Nhập tên sách hoặc id sách:");
  let foundBook = books.find(
    (book) =>
      book.id == searchTerm ||
      book.name.toLowerCase() === searchTerm.toLowerCase()
  );

  if (foundBook) {
    alert(
      `Sách tìm thấy: ${foundBook.name} - Giá: ${foundBook.price} - Số lượng: ${foundBook.quantity}`
    );
  } else {
    alert("Không tìm thấy sách.");
  }
}

// Hàm mua sách
function buyBook() {
  let bookList = books
    .map(
      (book) =>
        `${book.id}. ${book.name} - Giá: ${book.price} - Số lượng: ${book.quantity}`
    )
    .join("\n");
  let bookId = prompt("Chọn sách theo ID để mua:\n" + bookList);

  let book = books.find((b) => b.id == bookId);

  if (book) {
    let quantityToBuy = prompt("Nhập số lượng bạn muốn mua:");
    quantityToBuy = parseInt(quantityToBuy);

    if (quantityToBuy <= book.quantity && quantityToBuy > 0) {
      book.quantity -= quantityToBuy;
      cart.push({ ...book, quantity: quantityToBuy });
      alert(`Đã thêm ${quantityToBuy} cuốn ${book.name} vào giỏ hàng.`);
    } else {
      alert("Số lượng sách không đủ.");
    }
  } else {
    alert("Sách không hợp lệ.");
  }
}

// Hàm sắp xếp sách theo giá
function sortBooksByPrice() {
  let sortOrder = prompt("Sắp xếp theo giá: \n1. Tăng dần\n2. Giảm dần");
  let sortedBooks;

  if (sortOrder === "1") {
    sortedBooks = [...books].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "2") {
    sortedBooks = [...books].sort((a, b) => b.price - a.price);
  } else {
    alert("Lựa chọn không hợp lệ.");
    return;
  }

  let sortedList = sortedBooks
    .map((book) => `${book.name} - Giá: ${book.price}`)
    .join("\n");
  alert("Sách sắp xếp theo giá:\n" + sortedList);
}

// Hàm tính tổng số lượng sách đã mua và tổng tiền trong giỏ hàng
function calculateTotal() {
  let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  let totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  alert(
    `Tổng số lượng sách đã mua: ${totalQuantity}\nTổng tiền thanh toán: ${totalPrice} VND`
  );
}

// Hàm hiển thị tổng số lượng sách trong kho
function displayTotalStock() {
  let totalStock = books.reduce((sum, book) => sum + book.quantity, 0);
  alert(`Tổng số lượng sách trong kho: ${totalStock}`);
}

function main() {
  let option;

  do {
    option = displayMenu();

    switch (option) {
      case "1":
        displayBooksByCategory();
        break;
      case "2":
        addNewBook();
        break;
      case "3":
        findBookByNameOrId();
        break;
      case "4":
        buyBook();
        break;
      case "5":
        sortBooksByPrice();
        break;
      case "6":
        calculateTotal();
        break;
      case "7":
        displayTotalStock();
        break;
      case "8":
        alert("Cảm ơn bạn đã sử dụng chương trình!");
        break;
      default:
        alert("Lựa chọn không hợp lệ.");
    }
  } while (option !== "8");
}

main();
