let books = [];

// Hàm thêm sách mới
function addBook(id, title, author, year, price, isAvailable) {
  const book = {
    id: id,
    title: title,
    author: author,
    year: year,
    price: price,
    isAvailable: isAvailable,
  };
  books.push(book);
  console.log(`Sách ${title} đã được thêm.`);
}

// Hàm hiển thị danh sách sách
function displayBooks() {
  if (books.length === 0) {
    console.log("Chưa có sách trong thư viện.");
    return;
  }
  books.forEach((book) => {
    console.log(
      `ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${
        book.author
      }, Năm xuất bản: ${book.year}, Giá: ${book.price}, Trạng thái mượn: ${
        book.isAvailable ? "Có sẵn" : "Đã mượn"
      }`
    );
  });
}

// Hàm tìm kiếm sách theo tiêu đề
function findBookByTitle(title) {
  const book = books.find(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );
  if (book) {
    console.log(
      `Tìm thấy sách: ID: ${book.id}, Tiêu đề: ${book.title}, Tác giả: ${
        book.author
      }, Năm xuất bản: ${book.year}, Giá: ${book.price}, Trạng thái mượn: ${
        book.isAvailable ? "Có sẵn" : "Đã mượn"
      }`
    );
  } else {
    console.log("Không tìm thấy sách với tiêu đề này.");
  }
}

// Hàm cập nhật trạng thái mượn/trả sách
function updateBookAvailability(id, isAvailable) {
  const book = books.find((book) => book.id === id);
  if (book) {
    book.isAvailable = isAvailable;
    console.log(`Trạng thái mượn/trả của sách ${book.title} đã được cập nhật.`);
  } else {
    console.log("Không tìm thấy sách với ID này.");
  }
}

// Hàm xóa sách theo ID
function deleteBookById(id) {
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    const book = books[index];
    books.splice(index, 1);
    console.log(`Sách ${book.title} đã được xóa khỏi thư viện.`);
  } else {
    console.log("Không tìm thấy sách với ID này.");
  }
}

// Hàm sắp xếp sách theo giá tăng dần
function sortBooksByPrice() {
  books.sort((a, b) => a.price - b.price);
  console.log("Danh sách sách đã được sắp xếp theo giá tăng dần.");
}

function displayMenu() {
  let choice;
  do {
    choice = prompt(
      "Chọn một hành động:\n" +
        "1. Thêm sách mới\n" +
        "2. Hiển thị danh sách sách\n" +
        "3. Tìm kiếm sách theo tiêu đề\n" +
        "4. Cập nhật trạng thái mượn/trả sách\n" +
        "5. Xóa sách theo ID\n" +
        "6. Sắp xếp sách theo giá tăng dần\n" +
        "7. Thoát"
    );

    switch (choice) {
      case "1":
        const id1 = prompt("Nhập ID sách:");
        const title1 = prompt("Nhập tiêu đề sách:");
        const author1 = prompt("Nhập tác giả:");
        const year1 = prompt("Nhập năm xuất bản:");
        const price1 = prompt("Nhập giá sách:");
        const isAvailable1 = confirm("Sách có sẵn để mượn không?");
        addBook(id1, title1, author1, year1, price1, isAvailable1);
        break;

      case "2":
        displayBooks();
        break;

      case "3":
        const title2 = prompt("Nhập tiêu đề sách cần tìm:");
        findBookByTitle(title2);
        break;

      case "4":
        const id4 = prompt("Nhập ID sách cần cập nhật trạng thái:");
        const isAvailable4 = confirm("Sách có sẵn để mượn không?");
        updateBookAvailability(id4, isAvailable4);
        break;

      case "5":
        const id5 = prompt("Nhập ID sách cần xóa:");
        deleteBookById(id5);
        break;

      case "6":
        sortBooksByPrice();
        displayBooks();
        break;

      case "7":
        console.log("Thoát khỏi chương trình.");
        break;

      default:
        console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
  } while (choice !== "7");
}

displayMenu();
