let date1 = prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");
let date2 = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");

let d1 = new Date(date1);
let d2 = new Date(date2);

let differenceInTime = d2.getTime() - d1.getTime();
let differenceInDays = differenceInTime / (1000 * 3600 * 24);  

console.log("Độ lệch là " + Math.abs(differenceInDays) + " ngày");
