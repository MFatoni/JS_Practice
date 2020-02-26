var kalimat_uppercase1="Saya beLajar bahaSa peMrograman deNgan khUsuk".toUpperCase();
var kalimat_lowercase1="Saya beLajar bahaSa peMrograman deNgan khUsuk".toLowerCase();
console.log(kalimat_lowercase1);
console.log(kalimat_uppercase1);

var kalimat_uppercase2="Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual".toUpperCase();
var kalimat_lowercase2="Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual".toLowerCase();
console.log(kalimat_lowercase2);
console.log(kalimat_uppercase2);

var kalimat_asci="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
var asci=""
for(var i = 0;i<=5;i++){
    asci=asci+kalimat_asci.charCodeAt(i)+"-";
}
console.log(asci.slice(0,-1));
