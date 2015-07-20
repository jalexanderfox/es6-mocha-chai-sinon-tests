var expect = require('chai').expect;

//The Object.is() method determines whether two values are the same value.
describe('Object', function() {
	describe('#is', function(){
		it('determines whether two values are the same value.', function(){
			expect( Object.is(true, true) ).to.be.true;
			expect( Object.is(null, null) ).to.be.true;
			expect( Object.is(NaN, NaN) ).to.be.true;
			expect( Object.is(undefined,undefined) ).to.be.true;

			// Special Cases
			expect( Object.is(0, -0) ).to.be.false;
			expect( Object.is(-0, -0) ).to.be.true;
			expect( Object.is(NaN, 0/0) ).to.be.true;
		});

		it('two string literals with the same values truthy', function(){
			expect( Object.is('foo', 'foo') ).to.be.true;
		});

		it('two string literals with different values are falsy', function(){
			expect( Object.is('foo', 'bar') ).to.be.false;
		});

		it('two array literals with the same values are falsy', function(){
			expect( Object.is([], []) ).to.be.false;
		});

		it('variables pointing to the same object are truthy', function(){
			var g = (typeof(window) !== 'undefined') ? window : global;
			Object.is(g, g);
			var test = { a: 1 };
			expect( Object.is(test, test) ).to.be.true;
		});
	});
});
