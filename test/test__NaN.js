var expect = require('chai').expect;

// NaN
// The global NaN property is a value representing Not-A-Number.

// It is rather rare to use NaN in a program.
// It is the returned value when Math functions fail (Math.sqrt(-1)) or
// when a function trying to parse a number fails (parseInt("blabla")).

describe('#NaN', function(){
	it('represents Not-A-Number. Equivalent of NaN', function(){
		expect( NaN ).to.be.NaN;
	});

	it('NaN compares unequal (via ==, !=, ===, and !==) to any other value -- including to another NaN value.', function(){
		expect( NaN === NaN ).to.be.false;
		expect( Number.NaN === NaN ).to.be.false;
		expect( isNaN(NaN) ).to.be.true;
		expect( Number.isNaN(NaN) ).to.be.true;
		expect( isNaN(Number.NaN) ).to.be.true;
		expect( Number.isNaN(Number.NaN) ).to.be.true;

		function valueIsNaN(v) { return v !== v; }
		expect( valueIsNaN(1) ).to.be.false;
		expect( valueIsNaN(NaN) ).to.be.true;
		expect( valueIsNaN(Number.NaN) ).to.be.true;
	});
});


