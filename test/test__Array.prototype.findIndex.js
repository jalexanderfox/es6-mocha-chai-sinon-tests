// Javascript Array methods tests including ES6
var expect = require('chai').expect;


// A prime number (or a prime) is a natural number greater than 1 that has no
// positive divisors other than 1 and itself. A natural number greater than 1
// that is not a prime number is called a composite number.
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}


//The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing function. Otherwise -1 is returned.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#findIndex', function(){
			it('returns an index in the array, if an element in the array satisfies the provided testing function.', function(){
				expect( [4, 5, 8, 12].findIndex(isPrime) ).to.equal(1); // 1
			});
			it('Otherwise -1 is returned.', function(){
				expect( [4, 6, 8, 12].findIndex(isPrime) ).to.equal(-1); // -1, not found
			});
		});
	});
});
