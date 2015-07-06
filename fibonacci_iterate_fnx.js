function fib(range){
 var s1 = 1;
 var s2 = 1;
 var arr = [];
 var current;
 for (var i =0; i <= range; i++) {
   current = s2;
   s2 = s1;
   s1 = s1 + current;
   console.log(i, current, s1, s2);
   arr.push(current);
 }
 return arr;
}

console.log(fib(10));