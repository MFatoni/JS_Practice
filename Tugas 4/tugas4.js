const tinggi1= 2;
const tinggi2= 1;
const tinggi3= 3;
if (tinggi1 > tinggi2) {
    if(tinggi1 > tinggi3){
        if(tinggi2 > tinggi3){
            console.log("Tinggi badan tertinggi", tinggi1, "cm");
            console.log(tinggi1,tinggi2,tinggi3);
        } else {
            console.log("Tinggi badan tertinggi", tinggi1, "cm");
            console.log(tinggi1,tinggi3,tinggi2);
        }
    } else {
        console.log("Tinggi badan tertinggi", tinggi3, "cm");
        console.log(tinggi3,tinggi1,tinggi2);
    }
}
else if (tinggi2 > tinggi3) {
    if(tinggi2 > tinggi1){
        if(tinggi3 > tinggi1){
            console.log("Tinggi badan tertinggi", tinggi2, "cm");
            console.log(tinggi2,tinggi3,tinggi1);
        } else {
            console.log("Tinggi badan tertinggi", tinggi2, "cm");
            console.log(tinggi2,tinggi1,tinggi3);
        }
    } else {
        console.log("Tinggi badan tertinggi", tinggi1, "cm");
        console.log(tinggi1,tinggi3,tinggi2);
    }
} else {
    if(tinggi3 > tinggi2){
        if(tinggi2 > tinggi1){
            console.log("Tinggi badan tertinggi", tinggi3, "cm");
            console.log(tinggi3,tinggi2,tinggi1);
        } else {
            console.log("Tinggi badan tertinggi", tinggi3, "cm");
            console.log(tinggi3,tinggi1,tinggi2);
        }
    } else {
        console.log("Tinggi badan tertinggi", tinggi2, "cm");
        console.log(tinggi2,tinggi3,tinggi1);
    }
}