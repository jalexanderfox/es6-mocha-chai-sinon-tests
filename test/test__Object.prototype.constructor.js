var expect = require('chai').expect;

//Returns a reference to the Object function that created the instance's prototype.
//Note that the value of this property is a reference to the function itself,
//not a string containing the function's name. The value is only read-only for
//primitive values such as 1, true and "test".
describe('Object', function() {
	describe('#prototype', function(){
		describe('#constructor', function(){
			it('returns a reference to the Object function that created the instance\'s prototype.', function(){
				var o = {};
				expect( o.constructor ).to.equal( Object );

				var a = [];
				expect( a.constructor ).to.equal( Array );

				var n = new Number(3);
				expect( n.constructor ).to.equal( Number );
			});
		})

	})
}

);