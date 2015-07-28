var expect = require('chai').expect;

// encodeURIComponent(str);

// The encodeURIComponent() method encodes a Uniform Resource Identifier (URI)
// component by replacing each instance of certain characters by one, two, three, or
// four escape sequences representing the UTF-8 encoding of the character
// (will only be four escape sequences for characters composed of two "surrogate" characters).

describe('encodeURIComponent', function(){
	it('encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).', function(){

		// high-low pair ok
		expect( encodeURIComponent('\uD800\uDFFF') ).to.equal('%F0%90%8F%BF');

		// lone high surrogate throws "URIError: malformed URI sequence"
		expect( function(){ encodeURIComponent('\uD800') } ).to.throw(URIError);

		// lone low surrogate throws "URIError: malformed URI sequence"
		expect( function(){ encodeURIComponent('\uDFFF') } ).to.throw(URIError);
	});

	it('encodeURIComponent escapes all characters except the following: alphabetic, decimal digits, - _ . ! ~ * \' ( )', function(){
		expect( encodeURIComponent("-") ).to.equal("-");
		expect( encodeURIComponent("_") ).to.equal("_");
		expect( encodeURIComponent(".") ).to.equal(".");
		expect( encodeURIComponent("!") ).to.equal("!");
		expect( encodeURIComponent("~") ).to.equal("~");
		expect( encodeURIComponent("*") ).to.equal("*");
		expect( encodeURIComponent("'") ).to.equal("'");
		expect( encodeURIComponent("(") ).to.equal("(");
		expect( encodeURIComponent(")") ).to.equal(")");
	});
});


