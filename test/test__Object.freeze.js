var expect = require('chai').expect;

//The Object.freeze() method freezes an object:
//that is, prevents new properties from being added to it;
//prevents existing properties from being removed;
//and prevents existing properties, or their enumerability,
//configurability, or writability, from being changed.
//In essence the object is made effectively immutable.
//The method returns the object being frozen.
describe('Object', function() {
	describe('#freeze', function(){
		it('make an object immutable and returns the object being frozen', function(){
			var obj = {
			  prop: function() {},
			  foo: 'bar'
			};

			// New properties may be added, existing properties may be changed or removed
			obj.foo = 'baz';
			obj.lumpy = 'woof';
			delete obj.prop;

			var o = Object.freeze(obj);

			expect( Object.isFrozen(obj) ).to.be.true;

			// Now any changes will fail
			obj.foo = 'quux'; // silently does nothing
			obj.quaxxor = 'the friendly duck'; // silently doesn't add the property

			// ...and in strict mode such attempts will throw TypeErrors
			function fail(){
			  'use strict';
			  expect( function(){ obj.foo = 'sparky'; } ).to.throw( TypeError ); // throws a TypeError
			  // delete is not throwing an error...
			  // expect( function(){ delete obj.quaxxor; } ).to.throw( TypeError ); // throws a TypeError
			  expect( function(){ obj.sparky = 'arf'; } ).to.throw( TypeError ); // throws a TypeError
			}

			fail();

			// Attempted changes through Object.defineProperty will also throw
			expect( function() { Object.defineProperty(obj, 'ohai', { value: 17 }); } ).to.throw( TypeError ); // throws a TypeError
			expect( function() { Object.defineProperty(obj, 'foo', { value: 'eit' }); } ).to.throw( TypeError ); // throws a TypeError
		});

		it('is a shallow freeze, nested objects are mutable', function(){
			obj = {
			  internal: {}
			};

			Object.freeze(obj);
			obj.internal.a = 'aValue';

			expect( obj.internal.a ).to.equal( 'aValue' );
		});

		it('can be used to deep freeze an object', function(){
			// To make obj fully immutable, freeze each object in obj.
			// To do so, we use this function.

			function deepFreeze(o) {
			  var prop, propKey;
			  Object.freeze(o); // First freeze the object.
			  for (propKey in o) {
			    prop = o[propKey];
			    if (!o.hasOwnProperty(propKey) || !(typeof prop === 'object') || Object.isFrozen(prop)) {
			      // If the object is on the prototype, not an object, or is already frozen,
			      // skip it. Note that this might leave an unfrozen reference somewhere in the
			      // object if there is an already frozen object containing an unfrozen object.
			      continue;
			    }

			    deepFreeze(prop); // Recursively call deepFreeze.
			  }
			}

			obj2 = {
			  internal: {}
			};

			deepFreeze(obj2);
			obj2.internal.a = 'anotherValue';
			expect( obj2.internal.a ).to.equal( undefined );
			expect( Object.isExtensible(obj2.internal) ).to.be.false;
		});
	});
});
