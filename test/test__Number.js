var expect = require('chai').expect;

// new Number(value);
//The Number JavaScript object is a wrapper object allowing you to work with numerical values.
//A Number object is created using the Number() constructor.
describe('Number', function() {
	it('is a wrapper object allowing you to work with numerical values', function(){
		expect( new Number('123').valueOf() ).to.equal( 123 );
	});

	it('creates a number with value of zero if no value is provided as a parameter', function(){
		expect( new Number().valueOf() ).to.equal( 0 );
		expect( Number() ).to.equal( 0 );
	});

	it('if the argument cannot be converted into a number, it returns NaN.', function(){
		expect( Number(Object) ).to.be.NaN;
		expect( Number('notNumber') ).to.be.NaN;
	});

	it('in the non-constructor context, can be used to perform a type conversion.', function(){
		expect( Number("1") ).to.equal( 1 );
	});
});
