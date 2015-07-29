var expect = require('chai').expect;

// The decodeURI() function decodes a Uniform Resource Identifier (URI)
// previously created by encodeURI or by a similar routine.


// Replaces each escape sequence in the encoded URI with the character that it represents,
// but does not decode escape sequences that could not have been introduced by encodeURI.
// The character “#” is not decoded from escape sequences.

describe('decodeURI', function(){
	it('decodes a Uniform Resource Identifier (URI) component by replacing each instance of one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters) with their unescaped character.', function(){
		expect( decodeURI('http://www.jalexanderfox.com/github/?source=es6-mocha-chai-sinon-tests&test=escape%20space') ).to.equal('http://www.jalexanderfox.com/github/?source=es6-mocha-chai-sinon-tests&test=escape space');
		expect( decodeURI('%25') ).to.equal( '%' );
	});

	it('unescapes all characters except the following unescaped characters:  - _ . ! ~ * \' ( )  ', function(){
		expect( decodeURI("-") ).to.equal("-");
		expect( decodeURI("_") ).to.equal("_");
		expect( decodeURI(".") ).to.equal(".");
		expect( decodeURI("!") ).to.equal("!");
		expect( decodeURI("~") ).to.equal("~");
		expect( decodeURI("*") ).to.equal("*");
		expect( decodeURI("'") ).to.equal("'");
		expect( decodeURI("(") ).to.equal("(");
	});

	it('unescapes all characters except the following reserved characters:	; , / ? : @ & = + $ ', function(){
		expect( decodeURI(";") ).to.equal(";");
		expect( decodeURI(",") ).to.equal(",");
		expect( decodeURI("/") ).to.equal("/");
		expect( decodeURI("?") ).to.equal("?");
		expect( decodeURI(":") ).to.equal(":");
		expect( decodeURI("@") ).to.equal("@");
		expect( decodeURI("&") ).to.equal("&");
		expect( decodeURI("=") ).to.equal("=");
		expect( decodeURI("+") ).to.equal("+");
		expect( decodeURI("$") ).to.equal("$");
	});

	it('correctly decodes IPv6 URIs with square brackets', function(){
		expect( decodeURI('http://[2001:db8:1f70::999:de8:7648:6e8]:100/?test=space%20test&and=test') ).to.equal('http://[2001:db8:1f70::999:de8:7648:6e8]:100/?test=space test&and=test');
	});

});


