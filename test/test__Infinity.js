var expect = require('chai').expect;

// Infinity
// Infinity is a property of the global object, i.e. it is a variable in global scope.

// The initial value of Infinity is Number.POSITIVE_INFINITY.
// The value Infinity (positive infinity) is greater than any other number.
// This value behaves mathematically like infinity; for example,

// Per the ECMAScript 5 specification, Infinity is read only (implemented in JavaScript 1.8.5 / Firefox 4).

describe('Infinity', function(){
	it('initial value is Number.POSITIVE_INFINITY', function(){
		expect( Infinity ).to.equal( Number.POSITIVE_INFINITY);
	});

	it('is greater than any other number', function(){
		expect( Number.MAX_VALUE ).to.be.below( Infinity );
	});

	describe('behaves mathematically like infinity:', function(){
		it('any positive number multiplied by Infinity is Infinity', function(){
			expect( 2 * Infinity ).to.equal( Infinity );
		});
		it('anything divided by Infinity is 0.', function(){
			expect( 2 / Infinity ).to.equal( 0 );
		});

	});
});


