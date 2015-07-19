var expect = require('chai').expect;

//The values() method returns a new Array Iterator object that contains the values for each index in the array.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#values', function(){
			it('returns a new Array Iterator object that contains the values for each index in the array.', function(){
				var arr = ['w', 'y', 'k', 'o', 'p'];
				var eArr = arr.values();
				// your browser must support for..of loop
				// and let-scoped variables in for loops
				for (var letter of eArr) {
				  console.log(letter);
				}

				var arr = ['w', 'y', 'k', 'o', 'p'];
				var eArr = arr.values();
				expect( eArr.next().value ).to.equal( 'w' );
				expect( eArr.next().value ).to.equal( 'y' );
				expect( eArr.next().value ).to.equal( 'k' );
				expect( eArr.next().value ).to.equal( 'o' );
				expect( eArr.next().value ).to.equal( 'p' );
			});
		});
	});
});
