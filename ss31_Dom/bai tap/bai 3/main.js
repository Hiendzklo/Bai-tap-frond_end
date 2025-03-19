// Lấy các ô vuông theo id
const greenBox = document.getElementById("green");
const redBox = document.getElementById("red");
const purpleBox = document.getElementById("purple");

// Thêm sự kiện click vào từng ô vuông
greenBox.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

redBox.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

purpleBox.addEventListener("click", function () {
  document.body.style.backgroundColor = "purple";
});
