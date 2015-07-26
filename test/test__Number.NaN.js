var expect = require('chai').expect;

// Number.NaN
// The Number.NaN property represents Not-A-Number. Equivalent of NaN.

describe('Number', function() {
	describe('#NaN', function(){
		it('represents Not-A-Number. Equivalent of NaN', function(){
			expect( Number.NaN ).to.be.NaN;
		});
	});
});

