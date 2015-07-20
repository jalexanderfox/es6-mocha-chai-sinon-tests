var expect = require('chai').expect;

//The Object.keys() method returns an array of a given object's own enumerable properties,
//in the same order as that provided by a for...in loop (the difference being that a
//for-in loop enumerates properties in the prototype chain as well).
describe('Object', function() {
	describe('#keys', function(){
		it('returns an array of a given object\'s own enumerable properties, in the same order as that provided by a for...in loop.', function(){
			var arr = ['a', 'b', 'c'];
			expect( Object.keys(arr) ).to.eql( ['0', '1', '2'] );

			// array like object
			var obj = { 0: 'a', 1: 'b', 2: 'c' };
			expect( Object.keys(obj) ).to.eql( ['0', '1', '2'] );

			// array like object with random key ordering
			var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
			expect( Object.keys(an_obj) ).to.eql( ['2', '7', '100'] );

			// getFoo is property which isn't enumerable
			var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
			my_obj.foo = 1;

			expect( Object.keys(my_obj) ).to.eql( ['foo'] );
		});
	});
});
