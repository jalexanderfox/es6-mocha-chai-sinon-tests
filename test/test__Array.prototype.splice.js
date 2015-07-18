var expect = require('chai').expect;

//The splice() method changes the content of an array by removing existing elements and/or adding new elements.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#splice', function(){
			it('changes the content of an array by removing existing elements and/or adding new elements.', function(){
				var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

				// removes 0 elements from index 2, and inserts 'drum'
				var removed = myFish.splice(2, 0, 'drum');
				expect( removed ).to.eql([]); //no elements removed
				expect( myFish ).to.eql( ['angel', 'clown', 'drum', 'mandarin', 'surgeon'] );

				// removes 1 element from index 3
				removed = myFish.splice(3, 1);
				expect( myFish ).to.eql( ['angel', 'clown', 'drum', 'surgeon'] );
				expect(removed).to.eql( ['mandarin'] );

				// removes 1 element from index 2, and inserts 'trumpet'
				removed = myFish.splice(2, 1, 'trumpet');
				expect(myFish).to.eql( ['angel', 'clown', 'trumpet', 'surgeon'] );
				expect(removed).to.eql( ['drum'] );

				// removes 2 elements from index 0, and inserts 'parrot', 'anemone' and 'blue'
				removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
				expect(myFish).to.eql( ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon'] );
				expect(removed).to.eql( ['angel', 'clown'] );

				// removes 2 elements from index 3
				removed = myFish.splice(3, Number.MAX_VALUE);
				expect(myFish).to.eql( ['parrot', 'anemone', 'blue'] );
				expect(removed).to.eql( ['trumpet', 'surgeon'] );
			});
		})

	})
}

);