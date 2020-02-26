function deretAngka(n) {
 var i=1;
 var result = '';
 while(i<=n) {
   if (i % 15 === 0) {
     result += 'NIOMIC ';
   } else if (i % 3 === 0) {
     result += 'NIO ';
   } else if (i % 5 === 0) {
     result += 'MIC ';
   } else {
     result += i+' ';
   }
	i++;
 }
 return result
}

console.log(deretAngka(10))
console.log(deretAngka(20))
console.log(deretAngka(30))
