let input = prompt("Nhập vào dãy số:");

if (/^\d+$/.test(input)) { 
    let arr = input.split(""); 
    let max = Math.max(...arr); 
    console.log(max + " là số lớn nhất trong dãy số");
} else {
    console.log("dãy số không hợp lệ");
}
