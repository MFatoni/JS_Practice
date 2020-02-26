// function balikKata(kata) {
//     var katabaru="";
//     for(var i=kata.length-1; i>=0;i--){
//         katabaru+=kata.substr(i,1);
//     }
//     return katabaru;
// }

// // testCase
// console.log(balikKata("Niomic!"))
// console.log(balikKata("JavaScript"))
// console.log(balikKata("alohahola"))
// console.log(balikKata("Jawa_Barat"))


function dragStart(event){
    event.dataTransfer.setData("Text",event.target.id);
}
function dragging(event){
    document.getElementById("object_text").innerHTML="Element Sedang Di Drag";
}
function allowDrop(event){
    event.preventDefault();
}
function drop(event){
    event.preventDefault;
    var data=event.dataTransfer.getData("Text");
    console.log(data);
    event.target.appendChild(document.getElementById(data));
    document.getElementById("object_text").innerHTML="Element Sudah Di Drop";
}
function focus123(x){
    console.log(x);
}