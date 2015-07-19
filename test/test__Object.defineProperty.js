var expect = require('chai').expect;


//The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
describe('Object', function() {
	describe('#defineProperty', function(){
		it('defines a new property directly on an object, or modifies an existing property on an object, and returns the object.', function(){
			var o = {}; // Creates a new object

			// Example of an object property added with defineProperty with a data property descriptor
			Object.defineProperty(o, 'a', {
			  value: 37,
			  writable: true,
			  enumerable: true,
			  configurable: true
			});
			// 'a' property exists in the o object and its value is 37
			expect( o.a ).to.equal(37);

			// Example of an object property added with defineProperty with an accessor property descriptor
			var bValue = 38;
			Object.defineProperty(o, 'b', {
			  get: function() { return bValue; },
			  set: function(newValue) { bValue = newValue; },
			  enumerable: true,
			  configurable: true
			});
			expect( o.b ).to.equal(38); // 38
			// 'b' property exists in the o object and its value is 38
			// The value of o.b is now always identical to bValue, unless o.b is redefined
			expect( o.b ).to.equal(bValue);

			// // You cannot try to mix both:
			// Object.defineProperty(o, 'conflict', {
			//   value: 0x9f91102,
			//   get: function() { return 0xdeadbeef; }
			// });
			// // throws a TypeError: value appears only in data descriptors, get appears only in accessor descriptors

		});

		it('modifies existing property only if the property is writable.', function(){
			var o = {}; // Creates a new object

			Object.defineProperty(o, 'a', {
			  value: 37,
			  writable: false
			});

			expect( o.a ).to.equal( 37 );
			o.a = 25; // No error thrown (it would throw in strict mode, even if the value had been the same)
			expect( o.a ).to.equal( 37 ); // The assignment didn't work.

		});

		it('can set whether a property is enumerable', function(){
			var o = {};
			Object.defineProperty(o, 'a', { value: 1, enumerable: true });
			Object.defineProperty(o, 'b', { value: 2, enumerable: false });
			Object.defineProperty(o, 'c', { value: 3 }); // enumerable defaults to false
			o.d = 4; // enumerable defaults to true when creating a property by setting it

			for (var i in o) {
			  console.log(i);
			}
			// logs 'a' and 'd' (in undefined order)

			expect( Object.keys(o) ).to.eql( ['a', 'd'] );

			expect( o.propertyIsEnumerable('a') ).to.be.true; // true
			expect( o.propertyIsEnumerable('b') ).to.be.false; // false
			expect( o.propertyIsEnumerable('c') ).to.be.false; // false
		});

		it('can set the properties configurable attribute', function(){
			var o = {};
			Object.defineProperty(o, 'a', {
			  get: function() { return 1; },
			  configurable: false
			});

			// need to wrap Object.defineProperty in a function so that chai can catch the error
			expect( function() { Object.defineProperty(o, 'a', { configurable: true }) } ).to.throw(TypeError); // throws a TypeError
			expect( function() { Object.defineProperty(o, 'a', { enumerable: true }) } ).to.throw(TypeError); // throws a TypeError
			expect( function() { Object.defineProperty(o, 'a', { set: function() {} }) } ).to.throw(TypeError); // throws a TypeError (set was undefined previously)
			expect( function() { Object.defineProperty(o, 'a', { get: function() { return 1; } }) } ).to.throw(TypeError); // throws a TypeError (even though the new get does exactly the same thing)
			expect( function() { Object.defineProperty(o, 'a', { value: 12 }) } ).to.throw(TypeError); // throws a TypeError

			expect( o.a ).to.equal( 1 ); // logs 1
			delete o.a; // Nothing happens
			expect( o.a ).to.equal( 1 ); // logs 1
		});

		it('sets default values differently than dot notation', function(){
			var o = {};

			o.a = 1;
			// is equivalent to:
			Object.defineProperty(o, 'b', {
			  value: 1,
			  writable: true,
			  configurable: true,
			  enumerable: true
			});

			expect( o.a ).to.equal( 1 );
			expect( o.propertyIsEnumerable('a') ).to.equal( o.propertyIsEnumerable('b') );
			expect( Object.isFrozen(o) ).to.equal( Object.isFrozen(o) );
			expect( Object.getOwnPropertyDescriptor(o, 'b') ).to.eql( {
			  value: 1,
			  writable: true,
			  configurable: true,
			  enumerable: true
			} );


			// On the other hand,
			Object.defineProperty(o, 'c', { value: 1 });
			// is equivalent to:

			Object.defineProperty(o, 'd', {
			  value: 1,
			  writable: false,
			  configurable: false,
			  enumerable: false
			});

			expect( Object.getOwnPropertyDescriptor(o, 'd') ).to.eql({
			  value: 1,
			  writable: false,
			  configurable: false,
			  enumerable: false
			});
		});

		it('can set custom getters and setters', function(){
			function Archiver() {
				var temperature = null;
				var archive = [];

				Object.defineProperty(this, 'temperature', {
					get: function() {
						console.log('get!');
						return temperature;
					},
					set: function(value) {
						temperature = value;
						archive.push({ val: temperature });
					}
				});

				this.getArchive = function() { return archive; };
			}

			var arc = new Archiver();
			arc.temperature; // 'get!'
			arc.temperature = 11;
			arc.temperature = 13;
			expect(arc.getArchive()).to.eql([{ val: 11 }, { val: 13 }]);
		});
	});
});




