var expect = require('chai').expect;

// Infinity
// Infinity is a property of the global object, i.e. it is a variable in global scope.

// The initial value of Infinity is Number.POSITIVE_INFINITY.
// The value Infinity (positive infinity) is greater than any other number.
// This value behaves mathematically like infinity; for example, any positive
// number multiplied by Infinity is Infinity, and anything divided by Infinity is 0.

// Per the ECMAScript 5 specification, Infinity is read only (implemented in JavaScript 1.8.5 / Firefox 4).

describe('Infinity', function(){
	it('represents Not-A-Number. Equivalent of NaN', function(){
		expect( NaN ).to.be.NaN;
	});

	it('NaN compares unequal (via ==, !=, ===, and !==) to any other value -- including to another NaN value.', function(){

	});
});


