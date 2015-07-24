var expect = require('chai').expect;

//str.valueOf()
//The valueOf() method returns the primitive value of a String object.
describe('String', function() {
	describe('#prototype', function(){
		describe('#valueOf', function(){
			var x = new String('Hello world');

			it('returns a string representation of the object', function(){
				expect( x.valueOf() ).to.equal( 'Hello world' );
			});

			it('returns the same as the String.prototype.toString() method', function(){
				expect( x.valueOf() ).to.equal( x.valueOf() );
			});
		});
	});
});

