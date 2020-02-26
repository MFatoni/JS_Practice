function panggilNestedArray(value){
 var kata="[";
 for(var i = 0;i<value[0].length;i++){
 	kata +=" [ ";
 	for(var j = 0;j<value.length;j++){
 		j!==value.length-1 ? kata +=value[j][i]+", " :	kata +=value[j][i];
 	}
 	i!==value[0].length-1 ? kata +=" ],\n" :	kata +=" ] ]";
 }
 console.log(kata);
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray);
