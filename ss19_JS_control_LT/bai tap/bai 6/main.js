while (true) {
    let a = parseFloat(prompt("Nhập giá trị a:"));
    let b = parseFloat(prompt("Nhập giá trị b:"));
    let c = parseFloat(prompt("Nhập giá trị c:"));

    if (a === 0) {
        console.log("Không phải phương trình bậc 2 (a không thể bằng 0). Vui lòng nhập lại.");
    } else {
        let delta = b * b - 4 * a * c; 

        if (delta < 0) {
            console.log("Phương trình vô nghiệm");
        } else if (delta === 0) {
            let x = -b / (2 * a);
            console.log(`Phương trình có nghiệm kép: x1 = x2 = ${x}`);
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            console.log(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
        }
        break; 
    }
}
