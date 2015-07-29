var expect = require('chai').expect;

// decodeURIComponent(str);

// The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously
// created by encodeURIComponent or by a similar routine.


describe('decodeURIComponent', function(){
	it('encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).', function(){
		expect( decodeURIComponent("JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B") ).to.equal("JavaScript_шеллы");
		expect( decodeURIComponent('%25') ).to.equal( '%' );
	});

	it('unescapes all characters except the following unescaped characters:  - _ . ! ~ * \' ( )  ', function(){
		expect( decodeURIComponent("-") ).to.equal("-");
		expect( decodeURIComponent("_") ).to.equal("_");
		expect( decodeURIComponent(".") ).to.equal(".");
		expect( decodeURIComponent("!") ).to.equal("!");
		expect( decodeURIComponent("~") ).to.equal("~");
		expect( decodeURIComponent("*") ).to.equal("*");
		expect( decodeURIComponent("'") ).to.equal("'");
		expect( decodeURIComponent("(") ).to.equal("(");
	});

	it('unescapes all characters except the following reserved characters:	; , / ? : @ & = + $ ', function(){
		expect( decodeURIComponent(";") ).to.equal(";");
		expect( decodeURIComponent(",") ).to.equal(",");
		expect( decodeURIComponent("/") ).to.equal("/");
		expect( decodeURIComponent("?") ).to.equal("?");
		expect( decodeURIComponent(":") ).to.equal(":");
		expect( decodeURIComponent("@") ).to.equal("@");
		expect( decodeURIComponent("&") ).to.equal("&");
		expect( decodeURIComponent("=") ).to.equal("=");
		expect( decodeURIComponent("+") ).to.equal("+");
		expect( decodeURIComponent("$") ).to.equal("$");
	});
});


