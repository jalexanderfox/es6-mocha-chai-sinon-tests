var expect = require('chai').expect;

// Math
// Math is a built-in object that has properties and methods for mathematical constants and functions.
// Not a function object.

describe('Math', function(){
	it('a built-in object that has properties and methods for mathematical constants and functions, it is not a function object', function(){
		expect( typeof Math ).to.equal( 'object' );
		expect( function(){ return new Math() } ).to.throw( TypeError );
	});
});


