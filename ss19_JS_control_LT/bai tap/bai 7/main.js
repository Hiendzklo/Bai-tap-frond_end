while (true) {
    let a = parseFloat(prompt("Nhập số thứ nhất:"));
    let b = parseFloat(prompt("Nhập số thứ hai:"));
    let c = parseFloat(prompt("Nhập số thứ ba:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Vui lòng nhập đúng ba số.");
    } else {
        let max = a; 

        if (b > max) {
            max = b;
        }
        if (c > max) {
            max = c;
        }

        console.log(`Số lớn nhất trong 3 số là ${max}`);
        break; 
    }
}
