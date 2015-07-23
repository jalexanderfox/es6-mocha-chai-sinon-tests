var expect = require('chai').expect;

//str.search(regexp)
//The search() method executes a search for a match between a regular expression and this String object.
//NOTE: is most performant, over test, match and exec
describe('String', function() {
	describe('#prototype', function(){
		describe('#search', function(){
			it('search for a match between a regular expression and this String object.', function(){
				expect( 'somestring'.search(/i/) ).to.equal(7);
				expect( 'somestring'.search(/a/) ).to.equal(-1);

				function testinput(re, str) {
				  var midstring;
				  if (str.search(re) != -1) {
				    midstring = ' contains ';
				  } else {
				    midstring = ' does not contain ';
				  }
				  console.log(str + midstring + re);
				}
			});
		});
	});
});

