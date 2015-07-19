var expect = require('chai').expect;

//The push() method adds one or more elements to the end of an array and returns the new length of the array.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#push', function(){
			it('adds one or more elements to the end of an array and returns the new length of the array.', function(){
				var sports = ['soccer', 'baseball'];
				var total = sports.push('football', 'swimming');

				expect( sports ).to.eql( ['soccer', 'baseball', 'football', 'swimming'] );
				expect( total ).to.equal( 4 );


				// Merging two arrays
				var vegetables = ['parsnip', 'potato'];
				var moreVegs = ['celery', 'beetroot'];

				// Merge the second array into the first one
				// Equivalent to vegetables.push('celery', 'beetroot');
				Array.prototype.push.apply(vegetables, moreVegs);

				expect( vegetables ).to.eql( ['parsnip', 'potato', 'celery', 'beetroot'] );
			});
		});
	});
});
