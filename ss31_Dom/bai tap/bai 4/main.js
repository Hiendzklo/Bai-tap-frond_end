// Lấy modal
var modal = document.getElementById("myModal");

// Lấy nút mở modal
var btn = document.getElementById("myBtn");

// Lấy phần tử <span> để đóng modal
var span = document.getElementsByClassName("close")[0];

// Khi người dùng nhấn nút, mở modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Khi người dùng nhấn vào <span> (x), đóng modal
span.onclick = function () {
  modal.style.display = "none";
};
