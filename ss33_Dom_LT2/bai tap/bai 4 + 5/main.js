const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: "35990000",
    image: "https://laptopre.vn/upload/picture/picture-41628441833.jpg",
    description:
      "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: "29990000",
    image:
      "https://thienapple.com/watermark/product/600x600x2/upload/product/z5737132121705d3f3977bbf08ab0c90e9d71d17118946-1022.jpg?v=12",
    description: "Điện thoại iPhone với camera 48MP và chip A17 Pro.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: "28990000",
    image:
      "https://tintuc.dienthoaigiakho.vn/wp-content/uploads/2023/11/ro-ri-mat-kinh-galaxy-s24-ultra.jpg",
    description:
      "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM5",
    price: "9900000",
    image:
      "https://tainghechinhhang.vn/wp-content/uploads/2024/04/Sony-WH-1000XM5-3.jpg",
    description:
      "Tai nghe chống ồn tốt nhất với chất lượng pin lên đến 30 giờ.",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: "9999000",
    image:
      "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
    description:
      "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
  },
  {
    id: 6,
    name: "Loa JBL Charge 5",
    price: "3999000",
    image:
      "https://down-vn.img.susercontent.com/file/c6b02ab9ae6cac644b4577ac9760940f",
    description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
  },
];

function displayProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    productDiv.innerHTML = `
        <div class="product-card card">
          <img src="${product.image}" class="product-img card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-price">${product.price} VND</p>
            <button class="btn btn-primary w-100">Buy</button>
          </div>
        </div>
      `;

    productList.appendChild(productDiv);
  });
}

document.getElementById("searchButton").addEventListener("click", function () {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );
  });
  displayProducts(filteredProducts);
});

displayProducts(products);
