var expect = require('chai').expect;

//The Object.seal() method seals an object, preventing new properties from being added to it
//and marking all existing properties as non-configurable. Values of present properties can
//still be changed as long as they are writable.
describe('Object', function() {
	describe('#seal', function(){
		var obj = {
			prop: function() {},
			foo: 'bar'
		};

		it('method prevent an object from adding new properties and marking all existing properties as non-configurable.', function(){
			// New properties may be added, existing properties may be changed or removed.
			obj.foo = 'baz';
			obj.lumpy = 'woof';
			delete obj.prop;

			var o = Object.seal(obj);

			expect( o ).to.equal( obj );
			expect( Object.isSealed(obj) ).to.be.true;
		});

		it('Values of present properties can still be changed as long as they are writable.', function(){
			// Changing property values on a sealed object still works.
			obj.foo = 'quux';
			expect( obj.foo ).to.equal( 'quux' );
		});

		it('but you cannot convert data properties to accessors, or vice versa', function(){
			// But you can't convert data properties to accessors, or vice versa.
			var defineAccessorOn = function(object) {
				return function(){
					Object.defineProperty(object, 'foo', { get: function() { return 'g'; } }); // throws a TypeError
				}
			};

			expect( defineAccessorOn(obj) ).to.throw(TypeError);
		});

		it('any changes, other than to property values, will fail, ie. delete and add', function(){
			// Now any changes, other than to property values, will fail.
			obj.quaxxor = 'the friendly duck'; // silently doesn't add the property
			delete obj.foo; // silently doesn't delete the property
			console.log(obj);
			expect( obj ).to.eql( { "foo":"quux", "lumpy": "woof"} );

			// ...and in strict mode such attempts will throw TypeErrors.
			function fail() {
			  'use strict';
			  delete obj.foo; // throws a TypeError
			  obj.sparky = 'arf'; // throws a TypeError
			}
			expect( fail ).to.throw( TypeError );

			// Attempted additions through Object.defineProperty will also throw.
			var defineProperty = function(object, name, options) {
				return function(){
					Object.defineProperty(object, name, options)
				}
			}
			expect( defineProperty(obj, 'ohai', { value: 17 }) ).to.throw(TypeError); // throws a TypeError
			expect( Object.defineProperty(obj, 'foo', { value: 'eit' }).foo ).to.equal('eit'); // changes existing property value
		});
	});
});


