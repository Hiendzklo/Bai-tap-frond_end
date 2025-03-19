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

//Giỏ hàng của user
let cart = [];

//Hàm hiển thị menu

// Chương trình chính
function main() {
  let option;

  do {
    switch (option) {
      case "1":
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        alert("Cảm ơn bạn đã sử dụng dịch vụ!");
        break;
      default:
        alert("Lựa chọn không hợp lệ.");
    }
  } while (option !== "5");
}
