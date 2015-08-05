var expect = require('chai').expect;

// Math.random()
// The Math.random() function returns a floating-point, pseudo-random number
// in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive),
// which you can then scale to your desired range. The implementation selectsthe initial seed
// to the random number generation algorithm; it cannot be chosen or reset by the user.

// Because random is a static property of Math, you always use it as Math.random,
// rather than as a property of a Math object you created (Math is not a constructor).

// Note that as numbers in JavaScript are IEEE 754 floating point numbers with
// round-to-nearest-even behavior, the ranges claimed for the functions below
// (excluding the one for Math.random() itself) aren't exact.
// If extremely large bounds are chosen (253 or higher), it's possible in
// extremely rare cases to calculate the usually-excluded upper bound.


describe('Math', function(){
	describe('#random', function(){
		it('returns a floating-point, pseudo-random number in the range [0, 1), from 0 (inclusive) up to but not including 1 (exclusive)', function(){
			for(var i=0; i<10000; i++){
				var random = Math.random()
				expect( random ).to.be.at.least( 0 );
				expect( random ).to.be.below( 1 );
			}
		});

		describe('use:', function(){
			it('function to return a number between min and max (inclusive) and max (exclusive)', function(){
				// Returns a random number between min (inclusive) and max (exclusive)
				function getRandomArbitrary(min, max) {
				  return Math.random() * (max - min) + min;
				}

				for(var i=0; i<10000; i++){
					var random = getRandomArbitrary(1, 10)
					expect( random ).to.be.at.least( 1 );
					expect( random ).to.be.below( 10 );
				}
			});

			it('function to return a random integer between min (included) and max (included)', function(){
				// Returns a random integer between min (included) and max (included)
				// Using Math.round() will give you a non-uniform distribution!
				function getRandomIntInclusive(min, max) {
				  return Math.floor(Math.random() * (max - min + 1)) + min;
				}
				for(var i=0; i<10000; i++){
					var random = getRandomIntInclusive(1, 10)
					expect( random ).to.be.at.least( 1 );
					expect( random ).to.be.at.most( 10 );
				}
			});

			it('function with Math.round() will give you a non-uniform distribution', function(){
				// Returns a random integer between min (included) and max (excluded)
				// Using Math.round() will give you a non-uniform distribution!
				function getRandomInt(min, max) {
				  return Math.floor(Math.random() * (max - min)) + min;
				}

				for(var i=0; i<10000; i++){
					var random = getRandomInt(1, 10)
					expect( random ).to.be.at.least( 1 );
					expect( random ).to.be.below( 10 );
				}
			});
		});
	});
});


