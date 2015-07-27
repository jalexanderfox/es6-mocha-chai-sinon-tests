var expect = require('chai').expect;

// undefined
// The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.

describe('undefined', function(){
	it('represents the primitive value undefined', function(){
		expect( undefined ).to.be.undefined;
	});

	it('variable that has not been assigned a value is of type undefined.', function(){
		var test;
		expect( test ).to.be.undefined;
	});

	it('A method or statement also returns undefined if the variable that is being evalutated does not have an assigned value. A function returns undefined if a value was not returned.', function(){
		expect( (function(){}()) ).to.be.undefined;
	});

	it('is not a reserved word, it can be used as an identifier (variable name) in any scope other than the global scope.', function(){
		var test = { undefined: 'not undefined' };
		expect( test.undefined ).to.not.be.undefined;
	});

	describe('use:', function(){
		var x;
		it('Strict equality and undefined', function(){
			expect( x === undefined ).to.be.true;
		});

		it('Typeof operator and undefined, returns string "undefined"', function(){
			expect( typeof(x) === 'undefined' ).to.be.true;
		});

		it('Void operator and undefined', function(){
			expect( x === void 0 ).to.be.true;
		});
	});
});


