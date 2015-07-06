function* fibonacciGenerator() {
  var prev = 0;
  var curr = 1;
  while (true) {
      var reset = yield curr;
      if (reset){
          prev = 0;
          curr = 1;
      }
      curr = curr + prev;
      prev = curr - prev;
  }
}

var sequence = fibonacciGenerator();
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next().value);     // 13
console.log(sequence.next(true).value); // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
