var expect = require('chai').expect;

//The initial value of the @@iterator property is the same function object as the initial value of the values() property.
describe('Array', function() {
	describe('#prototype', function(){
		describe('@@iterator', function(){
			it('returns a new Array Iterator object that contains the values for each index in the array.', function(){
				var arr = ['w', 'y', 'k', 'o', 'p'];
				// your browser must support for..of loop
				// and let-scoped variables in for loops
				for (var letter of arr) {
				  console.log(letter);
				}


				var arr = ['w', 'y', 'k', 'o', 'p'];
				var eArr = arr[Symbol.iterator]();
				expect( eArr.next().value ).to.equal( 'w' );
				expect( eArr.next().value ).to.equal( 'y' );
				expect( eArr.next().value ).to.equal( 'k' );
				expect( eArr.next().value ).to.equal( 'o' );
				expect( eArr.next().value ).to.equal( 'p' );
			});
		})

	})
}

);