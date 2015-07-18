var expect = require('chai').expect;

//The shift() method removes the first element from an array and returns that element. This method changes the length of the array.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#shift', function(){
			it('removes the first element from an array and returns that element. This method changes the length of the array.', function(){
				var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
				var shifted = myFish.shift();

				expect( myFish ).to.eql( [ 'clown', 'mandarin', 'sturgeon' ] );
				expect( shifted ).to.equal( 'angel' );
				expect( myFish.length ).to.equal(3);
			});
		})

	})
}

);