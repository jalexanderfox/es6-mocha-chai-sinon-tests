var expect = require('chai').expect;

// encodeURI(str);

// The encodeURI() method encodes a Uniform Resource Identifier (URI) by
// replacing each instance of certain characters by one, two, three, or four
// escape sequences representing the UTF-8 encoding of the character
// (will only be four escape sequences for characters composed of two "surrogate" characters).


// Assumes that the URI is a complete URI, so does not encode reserved characters that have special meaning in the URI.

// encodeURI replaces all characters except the following with the appropriate UTF-8 escape sequences:
// Type	Includes
// Reserved characters	; , / ? : @ & = + $
// Unescaped characters	alphabetic, decimal digits, - _ . ! ~ * ' ( )
// Score	#

describe('encodeURI', function(){
	it('encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).', function(){
		expect( encodeURI('http://www.jalexanderfox.com/github/?source=es6-mocha-chai-sinon-tests&test=escape space') ).to.equal('http://www.jalexanderfox.com/github/?source=es6-mocha-chai-sinon-tests&test=escape%20space');
		expect( encodeURI('%') ).to.equal( '%25' );
	});

	it('escapes all characters except the following unescaped characters:  - _ . ! ~ * \' ( )  ', function(){
		expect( encodeURI("-") ).to.equal("-");
		expect( encodeURI("_") ).to.equal("_");
		expect( encodeURI(".") ).to.equal(".");
		expect( encodeURI("!") ).to.equal("!");
		expect( encodeURI("~") ).to.equal("~");
		expect( encodeURI("*") ).to.equal("*");
		expect( encodeURI("'") ).to.equal("'");
		expect( encodeURI("(") ).to.equal("(");
	});

	it('escapes all characters except the following reserved characters:	; , / ? : @ & = + $ ', function(){
		expect( encodeURI(";") ).to.equal(";");
		expect( encodeURI(",") ).to.equal(",");
		expect( encodeURI("/") ).to.equal("/");
		expect( encodeURI("?") ).to.equal("?");
		expect( encodeURI(":") ).to.equal(":");
		expect( encodeURI("@") ).to.equal("@");
		expect( encodeURI("&") ).to.equal("&");
		expect( encodeURI("=") ).to.equal("=");
		expect( encodeURI("+") ).to.equal("+");
		expect( encodeURI("$") ).to.equal("$");
	});

	it('throws URIError if one attempts to encode a surrogate which is not part of a high-low pair, e.g.,', function(){
		// high-low pair ok
		expect( encodeURI('\uD800\uDFFF') ).to.equal('%F0%90%8F%BF');

		// lone high surrogate throws "URIError: malformed URI sequence"
		expect( function(){ encodeURI('\uD800') } ).to.throw(URIError);

		// lone low surrogate throws "URIError: malformed URI sequence"
		expect( function(){ encodeURI('\uDFFF') } ).to.throw(URIError);
	});

	it('incorrectly encodes IPv6 URIs with square brackets', function(){
		expect( encodeURI('http://[2001:db8:1f70::999:de8:7648:6e8]:100/?test=space test&and=test') ).to.equal('http://%5B2001:db8:1f70::999:de8:7648:6e8%5D:100/?test=space%20test&and=test');
	});

	describe('following RFC3986 for URLs, which makes square brackets reserved (for IPv6) and thus not encoded when forming something which could be part of a URL (such as a host), the following code snippet may help:', function(){
		it('', function(){
			function fixedEncodeURI (str) {
			    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
			}

			//or
			var encodeURIIPv6 = fixedEncodeURI;

			expect( encodeURIIPv6('http://[2001:db8:1f70::999:de8:7648:6e8]:100/?test=space test&and=test') ).to.equal('http://[2001:db8:1f70::999:de8:7648:6e8]:100/?test=space%20test&and=test');
		});
	});
});


