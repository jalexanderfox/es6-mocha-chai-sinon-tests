var expect = require('chai').expect;

//The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
describe('Object', function() {
	describe('#getPrototypeOf', function(){
		it('returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.', function(){
			var proto = {};
			var obj = Object.create(proto);
			expect( Object.getPrototypeOf(obj) ).to.equal( proto );
		});
	});
});
