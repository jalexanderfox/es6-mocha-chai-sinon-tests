// Javascript Array methods tests including ES6
expect = require('chai').expect;


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


//The find() method returns a value in the array, if an element in the array satisfies the provided testing function. Otherwise undefined is returned.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#find', function(){
			it('returns a value in the array, if an element in the array satisfies the provided testing function.', function(){
				expect( [4, 5, 8, 12].find(isPrime) ).to.equal(5); // 5
			});
			it('Otherwise undefined is returned.', function(){
				expect( [4, 6, 8, 12].find(isPrime) ).to.equal(undefined); // undefined, not found
			});
		})

	})
}

);