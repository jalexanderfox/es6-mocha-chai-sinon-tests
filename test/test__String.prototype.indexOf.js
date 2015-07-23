var expect = require('chai').expect;

//str.indexOf(searchValue[, fromIndex])
//The indexOf() method returns the index within the calling String object
//of the first occurrence of the specified value, starting the search at fromIndex.
//Returns -1 if the value is not found.
describe('String', function() {
	describe('#prototype', function(){
		describe('#indexOf', function(){
			it('returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.', function(){
				expect( 'Blue Whale'.indexOf('Blue' ) ).to.equal( 0 );
				expect( 'Blue Whale'.indexOf('Whale', 0) ).to.equal( 5 );
				expect( 'Blue Whale'.indexOf('Whale', 5) ).to.equal( 5 );
			});

			it('is case sensitive', function(){
				expect( 'Blue Whale'.indexOf('blue') ).to.equal( -1 );
			});

			it('Returns -1 if the value is not found.', function(){
				expect( 'Blue Whale'.indexOf('Blute' ) ).to.equal( -1 );
			});


			describe('empty string searchValue', function(){
				it('returns the "fromIndex"', function(){
					expect( 'Blue Whale'.indexOf('', 9) ).to.equal( 9 );
					expect( 'Blue Whale'.indexOf('', 10) ).to.equal( 10 );
				});

				it('returns the last index if "fromIndex" is greater than String.length', function(){
					expect( 'Blue Whale'.indexOf('', 11) ).to.equal( 10 );
					expect( 'Blue Whale'.indexOf('', 20) ).to.equal( 10 );
					expect( 'Blue Whale'.indexOf('', Number.POSITIVE_INFINITY) ).to.equal( 10 );
				});
			});

			it('use: checking occurrences', function(){
				expect( 'Blue Whale'.indexOf('Blue') !== -1 ).to.be.true; // true
				expect( 'Blue Whale'.indexOf('Bloe') !== -1 ).to.be.false; // false
			});

			it('use: to count occurrences of a letter in a string', function(){
				var str = 'To be, or not to be, that is the question.';
				var count = 0;
				var pos = str.indexOf('e');

				while (pos !== -1) {
				  count++;
				  pos = str.indexOf('e', pos + 1);
				}

				expect( count ).to.equal( 4 );
			});
		});
	});
});

