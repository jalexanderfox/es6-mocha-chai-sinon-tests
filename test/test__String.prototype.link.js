var expect = require('chai').expect;

//str.link(url)
//The link() method creates an <a> HTML element that causes a string to be displayed as a hypertext link to another URL.
describe('String', function() {
	describe('#prototype', function(){
		describe('#link', function(){
			it('creates an <a> HTML element that causes a string to be displayed as a hypertext link to another URL.', function(){
				expect( 'MDN'.link('https://developer.mozilla.org/') ).to.equal('<a href="https://developer.mozilla.org/">MDN</a>');
			});
		});
	});
});

