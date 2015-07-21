var expect = require('chai').expect;

//The String global object is a constructor for strings, or a sequence of characters.
describe('Array', function() {
	it('is a constructor for arrays, which are high-level, list-like objects.', function(){
		expect( new Array(2) ).to.eql( [,] );
		expect( typeof new Array() ).to.equal( "object" );
	});

	describe('Use:', function(){
		it('can create an array', function(){
			var fruits = ["Apple", "Banana"];
			expect( fruits.length ).to.equal( 2 );
		});

		var fruits = ["Apple", "Banana"];

		it('can access (index into) an Array item', function(){
			var first = fruits[0];
			expect( first ).to.equal( 'Apple' );

			var last = fruits[fruits.length - 1];
			expect( last ).to.equal( 'Banana' );
		});

		it('can loop over an array', function(){

		});
	});

	describe('relationship between length and numerical properties', function(){
		var fruits = [];
		it('length and numerical properties are connected', function(){
			fruits.push('banana', 'apple', 'peach');

			expect( fruits.length ).to.equal( 3 ); // 3
		});
		it('length is updated appropriately when directly assigning to an index outside of the bounds of the current array', function(){
			expect( function(){ fruits[5] = 'mango'; } ).to.increase(fruits, 'length');
			expect( fruits[5] ).to.equal('mango'); // 'mango'
			expect( Object.keys(fruits) ).to.eql(['0', '1', '2', '5']);  // ['0', '1', '2', '5']
			expect( fruits.length ).to.equal(6); // 6
		});
		it('increase the length', function(){
			fruits.length = 10;
			expect( Object.keys(fruits) ).to.eql( ['0', '1', '2', '5'] ); // ['0', '1', '2', '5']
			expect( fruits.length ).to.equal( 10 ); // 10
		});
		it('decrease the length', function(){
			fruits.length = 2;
			expect( Object.keys(fruits) ).to.eql( ['0', '1'] );
			expect( fruits.length ).to.equal( 2 ); // 10
		});
	});

	describe('creating an array from the result of a match', function(){
		it('using RegExp.exec', function(){
			// Match one d followed by one or more b's followed by one d
			// Remember matched b's and the following d
			// Ignore case

			var myRe = /d(b+)(d)/i;
			var myArray = myRe.exec('cdbBdbsbz');
			expect( myArray ).to.include.members( [ "dbBd",  "bB",  "d" ] );
		});
	});

	describe('generic methods', function(){
	// Sometimes you would like to apply array methods to strings or other array-like objects
	// (such as function arguments). By doing this, you treat a string as an array of characters
	// (or otherwise treat a non-array as an array).
		describe('example, in order to check that every character in the variable str is a letter', function(){
			function isLetter(character) {
			  return character >= 'A' && character <= 'z';
			}

			expect( Array.prototype.every.call('LetterOnlyString', isLetter) ).to.be.true;
		});
	});

});



