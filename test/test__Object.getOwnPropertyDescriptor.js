var expect = require('chai').expect;

//The Object.getOwnPropertyDescriptor() method returns a property descriptor
//for an own property (that is, one directly present on an object, not present
//by dint of being along an object's prototype chain) of a given object.
describe('Object', function() {
	describe('#getOwnPropertyDescriptor', function(){
		it('returns a property descriptor for an own property of a given object.', function(){
			var o, d;

			o = { get foo() { return 17; } };
			d = Object.getOwnPropertyDescriptor(o, 'foo');
			console.log(d);
			console.log( { configurable: true, enumerable: true, get: function foo(){ return 17 }, set: undefined });
			// expect( d ).to.eql( { get: function foo(){ return 17 }, set: undefined, configurable: true, enumerable: true } );

			o = { bar: 42 };
			d = Object.getOwnPropertyDescriptor(o, 'bar');
			expect( d ).to.eql( { configurable: true, enumerable: true, value: 42, writable: true } );

			o = {};
			Object.defineProperty(o, 'baz', { value: 8675309, writable: false, enumerable: false });
			d = Object.getOwnPropertyDescriptor(o, 'baz');
			expect( d ).to.eql( { value: 8675309, writable: false, enumerable: false, configurable: false } );
		});
	});
});
