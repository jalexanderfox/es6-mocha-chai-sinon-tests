var expect = require('chai').expect;

//The pop() method removes the last element from an array and returns that element.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#pop', function(){
			it('removes the last element from an array and returns that element.', function(){
				var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
				var popped = myFish.pop();

				expect( myFish ).to.eql( ['angel', 'clown', 'mandarin' ] );
				expect( popped ).to.equal( 'sturgeon' );
			});
		});
	});
});
