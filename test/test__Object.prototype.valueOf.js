var expect = require('chai').expect;

//The valueOf() method returns the primitive value of the specified object.
describe('Object', function() {
	describe('#prototype', function(){
		describe('#toString', function(){
			it('returns the primitive value of the specified object.', function(){
				o = new Object();
				expect( o.valueOf() ).to.eql( {} );
			});
		});
	});
});
