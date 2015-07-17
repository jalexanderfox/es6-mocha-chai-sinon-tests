// Javascript Array methods tests including ES6
expect = require('chai').expect;

//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#indexOf', function(){
			it('returns the first index at which a given element can be found in the array.', function(){
				var array = [2, 5, 9];
				expect( array.indexOf(2) ).to.equal(0);     // 0
				expect( array.indexOf(9, 2) ).to.equal(2);  // 2
				expect( array.indexOf(2, -3) ).to.equal(0); // 0
			});
			it('returns -1 if it is not present', function(){
				var array = [2, 5, 9];
				expect( array.indexOf(7) ).to.equal(-1);     // -1
				expect( array.indexOf(2, -1) ).to.equal(-1); // -1
			});
		})

	})
}

);