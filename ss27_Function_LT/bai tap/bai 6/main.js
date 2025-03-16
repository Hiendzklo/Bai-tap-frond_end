function kiemTraCapSoCong(mang) {
  if (!Array.isArray(mang) || mang.some(isNaN)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }

  const phanLich = mang[1] - mang[0];

  for (let i = 1; i < mang.length - 1; i++) {
    if (mang[i + 1] - mang[i] !== phanLich) {
      console.log("FALSE");
      return;
    }
  }

  console.log("TRUE");
}

kiemTraCapSoCong([2, 4, 6, 8]);
kiemTraCapSoCong([3, 6, 9, 12, 14]);
kiemTraCapSoCong("abc");
