// returns array of fibonacci sequence numbers
function fib(range){
 var current = 1;
 var previous = 0;
 var arr = [];
 for (var i =0; i <= range; i++) {
   console.log('iteration = ', i, 'previous = ', previous, 'current = ', current);
   arr.push(current);
   current = previous + current;
   previous = current - previous;
 }
 return arr;
}

console.log(fib(10));