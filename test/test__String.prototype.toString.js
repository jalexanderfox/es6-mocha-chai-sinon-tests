var expect = require('chai').expect;

//str.toString()
//The toString() method returns a string representing the specified object.
describe('String', function() {
	describe('#prototype', function(){
		describe('#toString', function(){
			var x = new String('Hello world');

			it('returns a string representation of the object', function(){
				expect( x.toString() ).to.equal( 'Hello world' );
			});

			it('overrides the toString() method of the Object object; it does not inherit Object.prototype.toString()', function(){
				expect( x.toString ).to.equal( String.prototype.toString );
				expect( x.toString ).to.not.equal( Object.prototype.toString );
				expect( String.prototype.toString ).to.not.equal( Object.prototype.toString );
			});

			it('returns the same as the String.prototype.valueOf() method', function(){
				expect( x.toString() ).to.equal( x.valueOf() );
			});
		});
	});
});

