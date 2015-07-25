var expect = require('chai').expect;

//str.search(regexp)
//The search() method executes a search for a match between a regular expression and this String object.
//NOTE: is most performant, over test, match and exec
describe('String', function() {
	describe('#prototype', function(){
		describe('#search', function(){
			it('search for a match between a regular expression and this String object, returns the first match index.', function(){
				expect( 'somestring'.search(/o/) ).to.equal(1);
				expect( '0123456789'.search(/1/) ).to.equal(1);
			});

			it('returns -1 if there are no matches', function(){
				expect( 'somestring'.search(/a/) ).to.equal(-1);
				expect( 'somestring'.search(/1/) ).to.equal(-1);
				expect( '0123456789'.search(/a/) ).to.equal(-1);
			});
		});
	});
});

