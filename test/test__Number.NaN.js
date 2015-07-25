var expect = require('chai').expect;

// The Number.NaN
// The Number.NaN property represents Not-A-Number. Equivalent of NaN.

// This value behaves slightly differently than mathematical infinity:
describe('Number', function() {
	describe('#NaN', function(){
		it('represents Not-A-Number. Equivalent of NaN', function(){
			expect( Number.NaN ).to.be.NaN;
		});
	});
});

