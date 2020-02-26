// function func(arr){
//     return arr > 15;
// }
// var angka_filter= angka.filter(func);
// console.log(angka_filter);

function func() {
    var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

    var angka_filter = angka.filter(arr => {
        return arr > 15;
    });
    console.log(angka_filter);
}
func();