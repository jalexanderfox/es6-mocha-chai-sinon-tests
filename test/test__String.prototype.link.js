var expect = require('chai').expect;

//str.link(url)
//The link() method creates an <a> HTML element that causes a string to be displayed as a hypertext link to another URL.
describe('String', function() {
	describe('#prototype', function(){
		describe('#link', function(){
			it('creates wraps the string in an <a> HTML element with the   url   parameter as the href attribute.', function(){
				expect( 'MDN'.link('https://developer.mozilla.org/') ).to.equal('<a href="https://developer.mozilla.org/">MDN</a>');
			});
			if( typeof(window) !== 'undefined' && window.document ){
				it('links created with the anchor() method become elements in the document.links array', function(){
					expect( document.links ).to.have.length.above( 1 );
				});
			}
		});
	});
});

