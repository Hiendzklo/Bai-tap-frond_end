let gio = parseInt(prompt("Mời bạn nhập giờ (0-23):"));
let phut = parseInt(prompt("Mời bạn nhập phút (0-59):"));
let giay = parseInt(prompt("Mời bạn nhập giây (0-59):"));

if (gio < 0 || gio > 23 || phut < 0 || phut > 59 || giay < 0 || giay > 59) {
    console.log("Giá trị nhập vào không hợp lệ. Hãy nhập lại.");
} else {
    let meridian = "AM"; 

    if (gio >= 12) {
        meridian = "PM";
    }

    if (gio > 12) {
        gio = gio - 12; 
    } else if (gio === 0) {
        gio = 12;
    }

    console.log(gio.toString().padStart(2, '0') + ":" + phut.toString().padStart(2, '0') + ":" + giay.toString().padStart(2, '0') + " " + meridian);
}
