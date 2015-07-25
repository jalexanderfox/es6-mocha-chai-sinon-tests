var expect = require('chai').expect;

// Number.isFinite(value)
// The Number.isFinite() method determines whether the passed value is a finite number.
describe('Number', function() {
	describe('#isFinite', function(){
		it('returns true if a number is a finite number', function(){
			expect( Number.isFinite(Infinity) ).to.be.false;
			expect( Number.isFinite(NaN) ).to.be.false;
			expect( Number.isFinite(-Infinity) ).to.be.false;

			expect( Number.isFinite(Number.MIN_VALUE) ).to.be.true;
			expect( Number.isFinite(0.123) ).to.be.true;
			expect( Number.isFinite(0) ).to.be.true;
			expect( Number.isFinite(2e64) ).to.be.true;
		});

		it('differs from the global isFinite function, this method does not forcibly convert the parameter to a number. This means only values of the type number, that are also finite, return true.', function(){
			expect( Number.isFinite('0') ).to.be.false;
			expect( isFinite('0') ).to.be.true;
			expect( Number.isFinite('0') ).to.not.equal( isFinite('0') );
		});
	});
});

