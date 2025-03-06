let input = prompt("Nhập vào một dãy số:");

if (/^\d+$/.test(input)) { 
    let reversed = input.split("").reverse().join(""); 
    console.log("Output:", reversed);
} else {
    console.log("Output: dãy không hợp lệ");
}
