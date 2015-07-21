var expect = require('chai').expect;

//The String global object is a constructor for strings, or a sequence of characters.
describe('String', function() {
	it('object is a constructor for strings, or a sequence of characters.', function(){
		expect( String(1) ).to.equal( '1' );
		expect( new String(1) ).to.eql( { '0':'1'} );
	});

	it('has character access methods and array like access to characters', function(){
		expect( 'cat'.charAt(1) ).to.equal( 'a' );
		expect( 'cat'[1] ).to.equal( 'a' );
	});

	it('can be compared with other strings', function(){
		var a = 'a';
		var b = 'b';
		expect(a < b).to.be.true;

		if (a < b) { // true
			console.log(a + ' is less than ' + b);
		} else if (a > b) {
			console.log(a + ' is greater than ' + b);
		} else {
			console.log(a + ' and ' + b + ' are equal.');
		}

	});

	it('has a distinction between string primitives and String Objects', function(){
		var s_prim = 'foo';
		var s_obj = new String(s_prim);

		expect( typeof s_prim ).to.equal( "string" ); // Logs "string"
		expect( typeof s_obj ).to.equal("object");  // Logs "object"
	});

	it('returns different results for eval between primitives and String Objects', function(){
		var s1 = '2 + 2';             // creates a string primitive
		var s2 = new String('2 + 2'); // creates a String object
		expect( eval(s1) ).to.equal(4);        // returns the number 4
		// expect( eval(s2) ).to.equal("2 + 2");        // returns the string "2 + 2"
		expect( eval(s2) ).to.eql({ '0': '2', '1': ' ', '2': '+', '3': ' ', '4': '2' });        // returns the string "2 + 2"
	});

	// need to add shim support for this to work in node (non-standards implementation)
	describe.skip('generic methods', function(){
		it('String object for applying String methods to any object', function(){
			var num = 15;
			expect( String.replace(num, /5/, '2') ).to.equal( 12 );
		});
	});

});
