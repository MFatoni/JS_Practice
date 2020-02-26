function func() {
    var arr = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    for (var i of arr) {
        if (isFinite(i) == true) console.log("Angka", i, "NOT Infinity");
        else console.log("Angka", i, "Infinity");
    }
}
func();