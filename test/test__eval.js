var expect = require('chai').expect;

// eval(string);
// The eval() method evaluates JavaScript code represented as a string.

// eval() is a function property of the global object.


describe('eval', function(){
	it('evaluates JavaScript code represented as a string', function(){
		expect( eval('2 + 2') ).to.equal( 4 );
	});

	it('evalutates strings that represent expressions', function() {
		eval('var functionExpression = function(){};')
		expect( typeof functionExpression ).to.equal( 'function' );
	});

	it('evalutates strings that represent statements', function() {
		eval('function functionStatement(){};')
		expect( typeof functionStatement ).to.equal( 'function' );
	});

	it('evalutates strings that arithmetic expressions, could be used for delayed evaluation, probably best to use a function though', function() {
		var x = 2;
		var y = 1;
		eval('y = x + 2 - y');
		expect( y ).to.equal( 3 );
		expect( eval(y) ).to.equal( 3 );
		eval('y = x + 2 - y');
		expect( y ).to.equal( 1 );
	});

	it('returns the argument unchanged if the argument is not a string', function(){
		var objObject = {};
		expect( eval( objObject ) ).to.equal( objObject );
		expect( eval( new String('1 + 1') ) ).to.eql( new String('1 + 1') );
		expect( eval('1 + 1') ).to.equal( 2 );
	});

	it('returns the value of the last expression evaluated', function(){
		var str = "if ( a ) { 1+1; } else { 1+2; }";
		var a = true;
		var b = eval(str);  // returns 2
		expect( eval(str) ).to.equal( 2 );
		expect( b ).to.equal( 2 );

		a = false;
		b = eval(str);  // returns 3
		expect( eval(str) ).to.equal( 3 );
		expect( b ).to.equal( 3 );
	});

	it('requires "(" and ")" as prefix and suffix when defining function in order for the function to be returned', function(){
		var fctStr1 = "function a() {}"
		var fctStr2 = "(function a() {})"
		expect( typeof eval(fctStr1) ).to.equal( 'undefined' );  // return undefined
		expect( typeof eval(fctStr2) ).to.equal( 'function' );  // return a function
	});
});


