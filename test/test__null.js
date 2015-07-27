var expect = require('chai').expect;

// null
// The value null is a JavaScript literal representing null or an "empty" value, i.e. no object value is present.
// It is one of JavaScript's primitive values.

// The value null is a literal (not a property of the global object like undefined can be).
// In APIs, null is often retrieved in place where an object can be expected but no object is relevant.
// When checking for null or undefined beware of the differences between
// equality (==) and identity (===) operators (type-conversion is performed with the former).

describe('null', function(){
	it('literal representing empty value/no object value is present', function(){
		expect( null ).to.be.null;
	});

	it('difference between null and undefined', function(){
		expect( typeof null ).to.equal( 'object' );
		expect( typeof undefined ).to.equal( 'undefined' );
		expect( null === undefined ).to.be.false;
		expect( null  == undefined ).to.be.true;
	});
});


