function func() {
    var kalimat = "Saya ingin belajar bersama";
    kalimat = kalimat.split(" ");
    kalimat.forEach(function (item, index) {
        console.log("Item :", item, "index ke -", index);
    });
}
func();