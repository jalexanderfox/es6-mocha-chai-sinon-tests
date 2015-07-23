var expect = require('chai').expect;

//str.anchor(name)
//The anchor() method creates an <a> HTML anchor element that is used as a hypertext target.
describe('String', function() {
	describe('#prototype', function(){
		describe('#anchor', function(){
			it('creates an <a> HTML anchor element that is used as a hypertext target.', function(){
				expect( 'Table of Contents'.anchor('contents_anchor') ).to.equal('<a name="contents_anchor">Table of Contents</a>');
			});
		});
	});
});

