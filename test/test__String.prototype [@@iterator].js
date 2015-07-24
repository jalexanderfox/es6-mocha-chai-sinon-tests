var expect = require('chai').expect;

//string[Symbol.iterator]
//The [@@iterator]() method returns a new Iterator object that iterates over the code points of a String value,
//returning each code point as a String value.
describe('String', function() {
	describe('#prototype', function(){
		describe('#link', function(){
			it('returns a new Iterator object that iterates over the code points of a String value, returning each code point as a String value', function(){
				var string = 'A\uD835\uDC68';
				var strIter = string[Symbol.iterator]();

				expect( strIter.next().value ).to.equal( "A" );
				expect( strIter.next().value ).to.equal( "\uD835\uDC68" );
			});

			describe('use:', function(){
				it('with for..of', function(){
					var string = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A';

					// for the test
					var i = 0;
					var arrString = [
					"A"
					,"\uD835\uDC68"
					,"B"
					,"\uD835\uDC69"
					,"C"
					,"\uD835\uDC6A"
					];

					for (var v of string) {
					  console.log(v);
					  expect( v ).to.equal( arrString[i] );
					  i++;
					}
				});
			});
		});
	});
});

