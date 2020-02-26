function func() {
    var arr = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    var arr_filter = arr.filter(param => {
        return param > 10;
    })
    console.log("Sebelumnya :", arr.join());
    console.log("Ascending :", arr.sort().join());
    console.log("Descending :", arr.reverse().join());
    console.log("Filter > 10 :", arr_filter.sort().reverse().join());
}
func();