var expect = require('chai').expect;

//The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).
describe('Object', function() {
	describe('#preventExtensions', function(){
		it('prevents new properties from ever being added to an object.', function(){
			// Object.preventExtensions returns the object being made non-extensible.
			var obj = {};
			var obj2 = Object.preventExtensions(obj);
			expect( obj ).to.equal( obj2 );

			// Objects are extensible by default.
			var empty = {};
			expect( Object.isExtensible(empty) ).to.be.true;

			// ...but that can be changed.
			Object.preventExtensions(empty);
			expect( Object.isExtensible(empty) ).to.be.false;

			// Object.defineProperty throws when adding a new property to a non-extensible object.
			var nonExtensible = { removable: true };
			Object.preventExtensions(nonExtensible);
			var callback_addPropertyTo = function(obj, name, value) {
				return function() {
					Object.defineProperty(obj, name, { value: value });
				};
			};
			expect( callback_addPropertyTo(nonExtensible, 'new', 8675309) ).to.throw(TypeError); // throws a TypeError

			// In strict mode, attempting to add new properties to a non-extensible object throws a TypeError.
			function fail() {
				'use strict';
				nonExtensible.newProperty = 'FAIL'; // throws a TypeError
			}

			expect( fail ).to.throw(TypeError);

		});
	});
});
