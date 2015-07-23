var expect = require('chai').expect;

//str.lastIndexOf(searchValue[, fromIndex])
//The lastIndexOf() method returns the index within the calling String object
//of the last occurrence of the specified value, or -1 if not found.
//The calling string is searched backward, starting at fromIndex.
describe('String', function() {
	describe('#prototype', function(){
		describe('#lastIndexOf', function(){
			it('returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.', function(){
				expect( 'canal'.lastIndexOf('a') ).to.equal( 3 );
				expect( 'canal'.lastIndexOf('a', 2) ).to.equal( 1 );
			});

			it('has a relationship between fromIndex and result value similar to substring with lastIndexOf with now fromIndex', function(){
				var str = 'guadalcanal';
				// console.log('');
				// console.log(str.charAt(i), 'i === ', i, ' ', str.lastIndexOf('a'), '===', str.substr().lastIndexOf('a') );
				for(var i = 0; i < str.length; i++){
					// console.log(str.charAt(i), 'i === ', i, ' ', str.lastIndexOf('a', i), '===', str.substring(0, i+1).lastIndexOf('a') );
					expect( str.lastIndexOf('a', i) ).to.equal( str.substring(0, i+1).lastIndexOf('a') );
				}
			})

			it('is case sensitive', function(){
				expect( 'Blue Whale'.lastIndexOf('blue') ).to.equal( -1 );
			});

			it('Returns -1 if the value is not found.', function(){
				expect( 'Blue Whale'.lastIndexOf('Blute' ) ).to.equal( -1 );
			});

			describe('Using indexOf() and lastIndexOf()', function(){

				var anyString = 'Brave new world';
				it('The indexOf the first w from the beginning is', function(){
					expect( anyString.indexOf('w') ).to.equal( 8 );
				});

				it('The index of the first w from the end is', function(){
					expect( anyString.lastIndexOf('w') ).to.equal( 10 );
				});

				it('The index of "new" from the beginning is', function(){
					expect( anyString.indexOf('new') ).to.equal( 6 );
				});

				it('The index of "new" from the end is', function(){
					expect( anyString.lastIndexOf('new') ).to.equal( 6 );
				});

			});


			describe('empty string searchValue', function(){
				it('returns the "fromIndex"', function(){
					expect( 'Blue Whale'.lastIndexOf('', 9) ).to.equal( 9 );
					expect( 'Blue Whale'.lastIndexOf('', 10) ).to.equal( 10 );
				});

				it('returns the last index if "fromIndex" is greater than String.length', function(){
					expect( 'Blue Whale'.lastIndexOf('', 11) ).to.equal( 10 );
					expect( 'Blue Whale'.lastIndexOf('', 20) ).to.equal( 10 );
					// expect( 'Blue Whale'.lastIndexOf('', Number.POSITIVE_INFINITY) ).to.equal( 10 );
				});
			});

		});
	});
});

