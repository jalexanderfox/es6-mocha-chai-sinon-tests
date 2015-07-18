var expect = require('chai').expect;

//The reverse() method reverses an array in place.
//The first array element becomes the last and the last becomes the first.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#reverse', function(){
			it('reverses an array in place. The first array element becomes the last and the last becomes the first.', function(){
				var myArray = ['one', 'two', 'three'];
				myArray.reverse();

				expect( myArray ).to.eql( ['three', 'two', 'one'] );
			});
		})

	})
}

);