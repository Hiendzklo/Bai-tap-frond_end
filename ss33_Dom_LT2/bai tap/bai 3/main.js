let dishList = [
  { name: "Rau sạch", category: "Đồ ăn" },
  { name: "Thịt lợn", category: "Đồ ăn" },
  { name: "Pepsi không calo", category: "Nước" },
  { name: "CocaCola", category: "Nước" },
  { name: "Cò lế", category: "Dụng cụ" },
  { name: "Tuy vit", category: "Dụng cụ" },
];

document.getElementById("filterButton").addEventListener("click", function () {
  let selectedCategory = document.getElementById("categorySelect").value;
  let filteredDishes = dishList.filter((dish) => {
    return dish.category === selectedCategory || selectedCategory === "";
  });

  let productList = document.getElementById("productList");
  productList.innerHTML = "";
  filteredDishes.forEach((dish) => {
    let li = document.createElement("li");
    li.innerHTML = `<strong>Tên đồ ăn:</strong> ${dish.name} - <strong>Danh mục:</strong> ${dish.category}`;
    productList.appendChild(li);
  });
});
