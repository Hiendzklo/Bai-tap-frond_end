let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));

let delta = b * b - 4 * a * c;

if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Phương trình có hai nghiệm phân biệt:");
    console.log("Nghiệm 1: x1 = " + x1);
    console.log("Nghiệm 2: x2 = " + x2);
} else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("Phương trình có một nghiệm kép:");
    console.log("Nghiệm: x = " + x);
} else {
    console.log("Phương trình vô nghiệm.");
}
