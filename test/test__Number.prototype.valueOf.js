var expect = require('chai').expect;

// numObj.valueOf()
// The valueOf() method returns the wrapped primitive value of a Number object.

// This method is usually called internally by JavaScript and not explicitly in web code.

describe('Number', function() {
	describe('#prototype', function(){
		describe('#valueOf', function(){
			it('returns the wrapped primitive value of a Number object.', function(){
				var numObj = new Number(10);
				expect( typeof numObj ).to.equal( 'object' );
				expect( numObj.valueOf() ).to.equal( 10 );

				var num = numObj.valueOf();
				expect( num ).to.equal( 10 );
				expect( typeof num ).to.equal( 'number' );
			});
		});
	});
});

