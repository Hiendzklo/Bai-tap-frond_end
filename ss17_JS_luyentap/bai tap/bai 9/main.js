let a = parseFloat(prompt("Nhập giá trị a:"));
let b = parseFloat(prompt("Nhập giá trị b:"));
let c = parseFloat(prompt("Nhập giá trị c:"));

let delta = b * b - 4 * a * c;

if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có 2 nghiệm phân biệt:");
    console.log("Nghiệm x1 = " + x1);
    console.log("Nghiệm x2 = " + x2);
} else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("Phương trình có nghiệm kép:");
    console.log("Nghiệm x = " + x);
} else {
    console.log("Phương trình vô nghiệm (delta < 0).");
}
