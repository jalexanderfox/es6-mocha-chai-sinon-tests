// Javascript Array methods tests including ES6
var expect = require('chai').expect;

//The fill() method fills all the elements of an array from a start index to an end index with a static value.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#fill', function(){
			it('fills all the elements of an array from a start index to an end index with a static value', function(){
				expect( [1, 2, 3].fill(4) ).to.eql([4, 4, 4]);               // [4, 4, 4]
				expect( [1, 2, 3].fill(4, 1) ).to.eql([1, 4, 4]);            // [1, 4, 4]
				expect( [1, 2, 3].fill(4, 1, 2) ).to.eql([1, 4, 3]);         // [1, 4, 3]
				expect( [1, 2, 3].fill(4, 1, 1) ).to.eql([1, 2, 3]);         // [1, 2, 3]
				expect( [1, 2, 3].fill(4, -3, -2) ).to.eql([4, 2, 3]);       // [4, 2, 3]
				expect( [1, 2, 3].fill(4, NaN, NaN) ).to.eql([1, 2, 3]);     // [1, 2, 3]
				expect( [].fill.call({ length: 3 }, 4) ).to.eql({0: 4, 1: 4, 2: 4, length: 3});  // {0: 4, 1: 4, 2: 4, length: 3}
			});
		});
	});
});
