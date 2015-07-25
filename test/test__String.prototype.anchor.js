var expect = require('chai').expect;

//str.anchor(name)
//The anchor() method creates an <a> HTML anchor element that is used as a hypertext target.
describe('String', function() {
	describe('#prototype', function(){
		describe('#anchor', function(){
			it('wraps the string in <a> HTML anchor element that is used as a hypertext target.', function(){
				expect( 'Table of Contents'.anchor('contents_anchor') ).to.equal( '<a name="contents_anchor">Table of Contents</a>' );
			});

			it('name parameter string represents the name attribute of the <a> element.', function(){
				expect( 'Table of Contents'.anchor('contents_anchor').search('name="contents_anchor"') ).to.not.equal( -1 );
			});

			if( typeof(window) !== 'undefined' && window.document ){
				it('anchors created with the anchor() method become elements in the document.anchors array', function(){
					expect( document.anchors ).to.have.length.above( 1 );
				});
			}
		});
	});
});

