function chiaMang(mang, n) {
  if (!Array.isArray(mang) || typeof n !== "number" || n <= 0) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }

  let result = [];
  for (let i = 0; i < mang.length; i += n) {
    result.push(mang.slice(i, i + n));
  }

  console.log(result);
}

chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 3);
chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 4);
chiaMang("abc", 3);
