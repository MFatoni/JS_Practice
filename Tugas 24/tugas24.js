function func() {
    var arr = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    console.log("Sebelumnya : ", arr.join());
    console.log("Ascending : ", arr.sort().join());
    console.log("Descending : ", arr.reverse().join());
}
func();