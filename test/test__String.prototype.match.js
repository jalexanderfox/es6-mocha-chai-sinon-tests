var expect = require('chai').expect;

//str.match(regexp)
//The match() method retrieves the matches when matching a string against a regular expression. Returns an array.
describe('String', function() {
	describe('#prototype', function(){
		describe('#match', function(){
			it('returns an array after it retrieves the matches when matching a string against a regular expression.', function(){
				var str = 'For more information, see Chapter 3.4.5.1';
				var re = /(chapter \d+(\.\d)*)/i;
				var found = str.match(re);

				expect( found ).to.include.members( ['Chapter 3.4.5.1', 'Chapter 3.4.5.1', '.1'] );

				// logs ['Chapter 3.4.5.1', 'Chapter 3.4.5.1', '.1']

				// 'Chapter 3.4.5.1' is the first match and the first value
				// remembered from `(Chapter \d+(\.\d)*)`.

				// '.1' is the last value remembered from `(\.\d)`.

			});

			it('returns an array containing all matched substrings rather than matched objects if the regular expression has the "g" flag', function(){
				var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
				var regexp = /[A-E]/gi;
				var matches_array = str.match(regexp);
				expect( matches_array ).to.include.members( ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e'] );
			});

			it('returns null if there were no matches using global ignore case', function(){
				var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
				var regexp = /[0-9]/gi;
				var matches_array = str.match(regexp);
				expect( matches_array ).to.be.null;
			});
		});
	});
});

