function timSoDo(mang) {
  if (!Array.isArray(mang) || mang.some(isNaN)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }

  mang.sort((a, b) => a - b);

  for (let i = 0; i < mang.length - 1; i++) {
    if (mang[i + 1] - mang[i] !== 1) {
      console.log(mang[i] + 1);
      return;
    }
  }

  console.log("Dữ liệu không hợp lệ");
}

timSoDo([1, 2, 3, 5]);
timSoDo([1, 2, 4, 5]);
timSoDo("abc");
