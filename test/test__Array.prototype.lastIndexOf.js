// Javascript Array methods tests including ES6
var expect = require('chai').expect;

//The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#lastIndexOf', function(){
			it('returns the last index at which a given element can be found in the array', function(){
				var array = [2, 5, 9, 2];
				expect( array.lastIndexOf(2) ).to.equal(3);     // 3

			});
			it('the array is searched backwards, starting at fromIndex', function(){
				var array = [2, 5, 9, 2];
				expect( array.lastIndexOf(2, 3) ).to.equal(3);  // 3
				expect( array.lastIndexOf(2, 2) ).to.equal(0);  // 0
				expect( array.lastIndexOf(2, -2) ).to.equal(0); // 0
				expect( array.lastIndexOf(2, -1) ).to.equal(3); // 3
			});
			it('returns -1 if it is not present', function(){
				var array = [2, 5, 9, 2];
				expect( array.lastIndexOf(7) ).to.equal(-1);     // -1
			});
		})

	})
}

);